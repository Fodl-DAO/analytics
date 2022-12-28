/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  DyDxFlashModule,
  DyDxFlashModuleInterface,
} from "../DyDxFlashModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "soloAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SELF_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SOLO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
        ],
        internalType: "struct Account.Info",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "callFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class DyDxFlashModule__factory {
  static readonly abi = _abi;
  static createInterface(): DyDxFlashModuleInterface {
    return new utils.Interface(_abi) as DyDxFlashModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DyDxFlashModule {
    return new Contract(address, _abi, signerOrProvider) as DyDxFlashModule;
  }
}
