/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IExchangerAdapterProvider,
  IExchangerAdapterProviderInterface,
} from "../IExchangerAdapterProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "flag",
        type: "bytes1",
      },
    ],
    name: "getExchangerAdapter",
    outputs: [
      {
        internalType: "address",
        name: "exchangerAdapter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IExchangerAdapterProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IExchangerAdapterProviderInterface {
    return new utils.Interface(_abi) as IExchangerAdapterProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchangerAdapterProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IExchangerAdapterProvider;
  }
}
