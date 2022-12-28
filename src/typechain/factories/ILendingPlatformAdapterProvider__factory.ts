/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILendingPlatformAdapterProvider,
  ILendingPlatformAdapterProviderInterface,
} from "../ILendingPlatformAdapterProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "platform",
        type: "address",
      },
    ],
    name: "getPlatformAdapter",
    outputs: [
      {
        internalType: "address",
        name: "platformAdapter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ILendingPlatformAdapterProvider__factory {
  static readonly abi = _abi;
  static createInterface(): ILendingPlatformAdapterProviderInterface {
    return new utils.Interface(
      _abi
    ) as ILendingPlatformAdapterProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendingPlatformAdapterProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILendingPlatformAdapterProvider;
  }
}
