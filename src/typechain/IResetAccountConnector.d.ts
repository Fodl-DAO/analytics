/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IResetAccountConnectorInterface extends ethers.utils.Interface {
  functions: {
    "resetAccount(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "resetAccount",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "resetAccount",
    data: BytesLike
  ): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
}

export type OwnerChangedEvent = TypedEvent<
  [string, string] & { oldOwner: string; newOwner: string }
>;

export class IResetAccountConnector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IResetAccountConnectorInterface;

  functions: {
    resetAccount(
      oldOwner: string,
      newOwner: string,
      accountId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  resetAccount(
    oldOwner: string,
    newOwner: string,
    accountId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    resetAccount(
      oldOwner: string,
      newOwner: string,
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;

    OwnerChanged(
      oldOwner?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    resetAccount(
      oldOwner: string,
      newOwner: string,
      accountId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    resetAccount(
      oldOwner: string,
      newOwner: string,
      accountId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
