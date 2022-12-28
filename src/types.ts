import { BigNumber, providers } from 'ethers'
import { ILendingPlatform } from './typechain'

export type Chain = {
  provider: providers.Provider
  registry: string
  usdc: string
}

export type Account = {
  chain: string
  address: string
  owner: string
  platform: string
  supply: string
  borrow: string
  stable: boolean
  supplyValueUsd?: number
  borrowValueUsd?: number
}

export type PlatformAdapters = { [platform: string]: ILendingPlatform }
export type PricesPerPlatform = { [platform: string]: { [token: string]: BigNumber } }
