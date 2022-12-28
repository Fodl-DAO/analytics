/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICTokenProvider,
  ICTokenProviderInterface,
} from "../ICTokenProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "platform",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getCToken",
    outputs: [
      {
        internalType: "address",
        name: "syntheticToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICTokenProvider__factory {
  static readonly abi = _abi;
  static createInterface(): ICTokenProviderInterface {
    return new utils.Interface(_abi) as ICTokenProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICTokenProvider {
    return new Contract(address, _abi, signerOrProvider) as ICTokenProvider;
  }
}
