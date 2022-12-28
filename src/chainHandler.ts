import { BigNumber, ethers } from 'ethers'
import { STABLECOINS_SET } from './constants'
import {
  AllConnectors__factory,
  ERC20__factory,
  FodlNFT__factory,
  FoldingRegistry,
  FoldingRegistry__factory,
  ILendingPlatform__factory,
} from './typechain'
import { Account, Chain, PlatformAdapters, PricesPerPlatform } from './types'
import { range } from './utils'

export class ChainHandler {
  public networkName?: string
  private registry: FoldingRegistry
  private usdcDecimals?: number

  public accounts: Account[] = []

  constructor(private chain: Chain) {
    this.registry = FoldingRegistry__factory.connect(chain.registry, chain.provider)
  }

  private uint256ToAddress = (tokenId: BigNumber) => ethers.utils.hexZeroPad(tokenId.toHexString(), 20).toLowerCase()

  public async init() {
    this.networkName = (await this.chain.provider.getNetwork()).name
    this.usdcDecimals = await ERC20__factory.connect(this.chain.usdc, this.chain.provider).decimals()
    await this.fetchNewAccounts()
  }

  public async update() {
    await this.fetchNewAccounts()
    const prices: PricesPerPlatform = await this.getPricesPerPlatform()
    await this.refreshAccountsData(prices)
  }

  private async fetchNewAccounts() {
    const nft = FodlNFT__factory.connect(await this.registry.callStatic.fodlNFT(), this.chain.provider)
    const n = (await nft.callStatic.totalSupply()).toNumber()
    console.log(this.networkName, `accounts count: ${n}`)

    const newAccounts = await Promise.all(
      range(n, this.accounts.length).map(async (index) => {
        const id = await nft.callStatic.tokenByIndex(index)
        const owner = await nft.callStatic.ownerOf(id)
        const address = this.uint256ToAddress(id)
        const pos = AllConnectors__factory.connect(address, this.chain.provider)
        const [platform, supply, borrow] = await pos.callStatic.getSimplePositionDetails()
        const stable = this.isPositionStable(supply, borrow)
        return { chain: this.networkName!, address, owner, platform, supply, borrow, stable }
      })
    )

    this.accounts = [...this.accounts, ...newAccounts]
  }

  private async refreshAccountsData(prices: PricesPerPlatform) {
    await Promise.all(
      this.accounts.map(async (account) => {
        const pos = AllConnectors__factory.connect(account.address, this.chain.provider)
        const [supplyBalance, borrowBalance] = await Promise.all([
          pos.callStatic.getSupplyBalance(),
          pos.callStatic.getBorrowBalance(),
        ])
        const usdcPrice = prices[account.platform][this.chain.usdc]
        if (usdcPrice.isZero()) {
          console.error(`chain ${this.networkName} platform: ${account.platform} has USDC price set to 0!!!!!`)
          return
        }

        account.supplyValueUsd = supplyBalance
          .mul(prices[account.platform][account.supply])
          .div(usdcPrice)
          .div(BigNumber.from(10).pow(this.usdcDecimals!))
          .toNumber()

        account.borrowValueUsd = borrowBalance
          .mul(prices[account.platform][account.borrow])
          .div(usdcPrice)
          .div(BigNumber.from(10).pow(this.usdcDecimals!))
          .toNumber()
      })
    )
  }

  private async getPricesPerPlatform() {
    const platforms: PlatformAdapters = await this.getPlatforms(this.accounts)

    const priceQueriesSet = new Set<string>()
    Object.keys(platforms).forEach((platform) => {
      priceQueriesSet.add(`${platform}-${this.chain.usdc}`)
    })
    this.accounts.forEach((account) => {
      priceQueriesSet.add(`${account.platform}-${account.supply}`)
      priceQueriesSet.add(`${account.platform}-${account.borrow}`)
    })
    const priceQueries = Array.from(priceQueriesSet)

    const prices: PricesPerPlatform = Object.fromEntries(Object.keys(platforms).map((p) => [p, {}]))
    await Promise.all(
      priceQueries.map(async (p) => {
        const [platform, token] = p.split('-')
        const price = await platforms[platform].callStatic.getReferencePrice(platform, token)
        prices[platform][token] = price
      })
    )
    return prices
  }

  private async getPlatforms(activeAccounts: Account[]): Promise<PlatformAdapters> {
    const platformAddresses = new Set<string>(activeAccounts.map(({ platform }) => platform))
    const platforms = Object.fromEntries(
      await Promise.all(
        Array.from(platformAddresses).map(async (platform) => [
          platform,
          ILendingPlatform__factory.connect(
            await this.registry.callStatic.getPlatformAdapter(platform),
            this.chain.provider
          ),
        ])
      )
    )
    return platforms
  }

  private isPositionStable(supplyToken: string, borrowToken: string) {
    const st = supplyToken.toLowerCase()
    const bt = borrowToken.toLowerCase()
    return st == bt || (STABLECOINS_SET.has(st) && STABLECOINS_SET.has(bt))
  }
}
