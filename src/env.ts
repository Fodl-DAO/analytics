import dotenv from 'dotenv'
import {
  BSC_REGISTRY, BSC_USDC, ETH_REGISTRY, ETH_USDC, POLYGON_REGISTRY, POLYGON_USDC
} from './constants'
import { newProvider } from './provider'
import { Chain } from './types'

dotenv.config()

if (!process.env.ETHEREUM_RPC_PROVIDER) throw new Error(`Need env variable for: ETHEREUM_RPC_PROVIDER`)
const ETH_PROVIDER = newProvider(process.env.ETHEREUM_RPC_PROVIDER,  {
  maxConcurrent: 1000,
  minTime: 10
})

if (!process.env.POLYGON_RPC_PROVIDER) throw new Error(`Need env variable for: POLYGON_RPC_PROVIDER`)
const POLYGON_PROVIDER = newProvider(process.env.POLYGON_RPC_PROVIDER,  {
  maxConcurrent: 1000,
  minTime: 50
})

if (!process.env.BSC_RPC_PROVIDER) throw new Error(`Need env variable for: BSC_RPC_PROVIDER`)
const BSC_PROVIDER = newProvider(process.env.BSC_RPC_PROVIDER,  {
  maxConcurrent: 1000,
  minTime: 30
})

export const ETH_CHAIN: Chain = {
  provider: ETH_PROVIDER,
  registry: ETH_REGISTRY,
  usdc: ETH_USDC,
}

export const POLYGON_CHAIN: Chain = {
  provider: POLYGON_PROVIDER,
  registry: POLYGON_REGISTRY,
  usdc: POLYGON_USDC,
}

export const BSC_CHAIN: Chain = {
  provider: BSC_PROVIDER,
  registry: BSC_REGISTRY,
  usdc: BSC_USDC,
}
