/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICompoundPriceOracle,
  ICompoundPriceOracleInterface,
} from "../ICompoundPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICompoundPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): ICompoundPriceOracleInterface {
    return new utils.Interface(_abi) as ICompoundPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICompoundPriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICompoundPriceOracle;
  }
}
