/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFoldingAccountOwnerProvider,
  IFoldingAccountOwnerProviderInterface,
} from "../IFoldingAccountOwnerProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "foldingAccount",
        type: "address",
      },
    ],
    name: "accountOwner",
    outputs: [
      {
        internalType: "address",
        name: "foldingAccountOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IFoldingAccountOwnerProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IFoldingAccountOwnerProviderInterface {
    return new utils.Interface(_abi) as IFoldingAccountOwnerProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFoldingAccountOwnerProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IFoldingAccountOwnerProvider;
  }
}
