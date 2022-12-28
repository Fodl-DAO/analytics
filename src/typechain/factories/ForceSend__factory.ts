/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ForceSend, ForceSendInterface } from "../ForceSend";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052604051604e380380604e83398181016040526020811015602357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff16fffe";

export class ForceSend__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ForceSend> {
    return super.deploy(to, overrides || {}) as Promise<ForceSend>;
  }
  getDeployTransaction(
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(to, overrides || {});
  }
  attach(address: string): ForceSend {
    return super.attach(address) as ForceSend;
  }
  connect(signer: Signer): ForceSend__factory {
    return super.connect(signer) as ForceSend__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForceSendInterface {
    return new utils.Interface(_abi) as ForceSendInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForceSend {
    return new Contract(address, _abi, signerOrProvider) as ForceSend;
  }
}
