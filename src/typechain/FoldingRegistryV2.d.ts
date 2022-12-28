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

interface FoldingRegistryV2Interface extends ethers.utils.Interface {
  functions: {
    "accountOwner(address)": FunctionFragment;
    "addBatchPlatformsWithAdapter(address[],address)": FunctionFragment;
    "addCTokenOnPlatform(address,address,address)": FunctionFragment;
    "addExchangerWithAdapter(bytes1,address)": FunctionFragment;
    "addImplementation(address,bytes4[])": FunctionFragment;
    "addPlatformWithAdapter(address,address)": FunctionFragment;
    "changeExchangerAdapter(bytes1,address)": FunctionFragment;
    "changePlatformAdapter(address,address)": FunctionFragment;
    "createAccount()": FunctionFragment;
    "fodlNFT()": FunctionFragment;
    "getCToken(address,address)": FunctionFragment;
    "getExchangerAdapter(bytes1)": FunctionFragment;
    "getImplementation(bytes4)": FunctionFragment;
    "getPlatformAdapter(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeCTokenFromPlatform(address,address)": FunctionFragment;
    "removeExchanger(bytes1)": FunctionFragment;
    "removeImplementation(bytes4[])": FunctionFragment;
    "removePlatform(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNFT(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addBatchPlatformsWithAdapter",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "addCTokenOnPlatform",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addExchangerWithAdapter",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addImplementation",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addPlatformWithAdapter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeExchangerAdapter",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changePlatformAdapter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fodlNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getExchangerAdapter",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformAdapter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeCTokenFromPlatform",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeExchanger",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeImplementation",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removePlatform",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setNFT", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBatchPlatformsWithAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCTokenOnPlatform",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addExchangerWithAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPlatformWithAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeExchangerAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePlatformAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fodlNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExchangerAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCTokenFromPlatform",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeExchanger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePlatform",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ExchangerAdapterLinkUpdated(bytes1,address)": EventFragment;
    "ImplementationAdded(address,bytes4[])": EventFragment;
    "ImplementationRemoved(bytes4[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PlatformAdapterLinkUpdated(address,address)": EventFragment;
    "TokenOnPlatformUpdated(address,address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "ExchangerAdapterLinkUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformAdapterLinkUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenOnPlatformUpdated"): EventFragment;
}

export type ExchangerAdapterLinkUpdatedEvent = TypedEvent<
  [string, string] & { flag: string; adapter: string }
>;

export type ImplementationAddedEvent = TypedEvent<
  [string, string[]] & { implementation: string; signatures: string[] }
>;

export type ImplementationRemovedEvent = TypedEvent<
  [string[]] & { signatures: string[] }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PlatformAdapterLinkUpdatedEvent = TypedEvent<
  [string, string] & { platform: string; adapter: string }
>;

export type TokenOnPlatformUpdatedEvent = TypedEvent<
  [string, string, string] & {
    platform: string;
    token: string;
    syntheticToken: string;
  }
>;

export class FoldingRegistryV2 extends BaseContract {
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

  interface: FoldingRegistryV2Interface;

  functions: {
    accountOwner(account: string, overrides?: CallOverrides): Promise<[string]>;

    addBatchPlatformsWithAdapter(
      platforms: string[],
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCTokenOnPlatform(
      platform: string,
      token: string,
      synthToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addExchangerWithAdapter(
      flag: BytesLike,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addImplementation(
      _implementation: string,
      _sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPlatformWithAdapter(
      platform: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeExchangerAdapter(
      flag: BytesLike,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changePlatformAdapter(
      platform: string,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fodlNFT(overrides?: CallOverrides): Promise<[string]>;

    getCToken(
      platform: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { cToken: string }>;

    getExchangerAdapter(
      flag: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { adapter: string }>;

    getImplementation(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { implementation: string }>;

    getPlatformAdapter(
      platform: string,
      overrides?: CallOverrides
    ): Promise<[string] & { adapter: string }>;

    initialize(
      fodlNFT_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeCTokenFromPlatform(
      platform: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeExchanger(
      flag: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeImplementation(
      sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePlatform(
      platform: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNFT(
      fodlNFTV2_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  accountOwner(account: string, overrides?: CallOverrides): Promise<string>;

  addBatchPlatformsWithAdapter(
    platforms: string[],
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCTokenOnPlatform(
    platform: string,
    token: string,
    synthToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addExchangerWithAdapter(
    flag: BytesLike,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addImplementation(
    _implementation: string,
    _sigs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPlatformWithAdapter(
    platform: string,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeExchangerAdapter(
    flag: BytesLike,
    newAdapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changePlatformAdapter(
    platform: string,
    newAdapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createAccount(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fodlNFT(overrides?: CallOverrides): Promise<string>;

  getCToken(
    platform: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getExchangerAdapter(
    flag: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getImplementation(
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlatformAdapter(
    platform: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    fodlNFT_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeCTokenFromPlatform(
    platform: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeExchanger(
    flag: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeImplementation(
    sigs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePlatform(
    platform: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNFT(
    fodlNFTV2_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    accountOwner(account: string, overrides?: CallOverrides): Promise<string>;

    addBatchPlatformsWithAdapter(
      platforms: string[],
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addCTokenOnPlatform(
      platform: string,
      token: string,
      synthToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addExchangerWithAdapter(
      flag: BytesLike,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addImplementation(
      _implementation: string,
      _sigs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    addPlatformWithAdapter(
      platform: string,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeExchangerAdapter(
      flag: BytesLike,
      newAdapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changePlatformAdapter(
      platform: string,
      newAdapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createAccount(overrides?: CallOverrides): Promise<string>;

    fodlNFT(overrides?: CallOverrides): Promise<string>;

    getCToken(
      platform: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getExchangerAdapter(
      flag: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getImplementation(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlatformAdapter(
      platform: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(fodlNFT_: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeCTokenFromPlatform(
      platform: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeExchanger(flag: BytesLike, overrides?: CallOverrides): Promise<void>;

    removeImplementation(
      sigs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    removePlatform(platform: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNFT(fodlNFTV2_: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "ExchangerAdapterLinkUpdated(bytes1,address)"(
      flag?: null,
      adapter?: null
    ): TypedEventFilter<[string, string], { flag: string; adapter: string }>;

    ExchangerAdapterLinkUpdated(
      flag?: null,
      adapter?: null
    ): TypedEventFilter<[string, string], { flag: string; adapter: string }>;

    "ImplementationAdded(address,bytes4[])"(
      implementation?: null,
      signatures?: null
    ): TypedEventFilter<
      [string, string[]],
      { implementation: string; signatures: string[] }
    >;

    ImplementationAdded(
      implementation?: null,
      signatures?: null
    ): TypedEventFilter<
      [string, string[]],
      { implementation: string; signatures: string[] }
    >;

    "ImplementationRemoved(bytes4[])"(
      signatures?: null
    ): TypedEventFilter<[string[]], { signatures: string[] }>;

    ImplementationRemoved(
      signatures?: null
    ): TypedEventFilter<[string[]], { signatures: string[] }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PlatformAdapterLinkUpdated(address,address)"(
      platform?: null,
      adapter?: null
    ): TypedEventFilter<
      [string, string],
      { platform: string; adapter: string }
    >;

    PlatformAdapterLinkUpdated(
      platform?: null,
      adapter?: null
    ): TypedEventFilter<
      [string, string],
      { platform: string; adapter: string }
    >;

    "TokenOnPlatformUpdated(address,address,address)"(
      platform?: null,
      token?: null,
      syntheticToken?: null
    ): TypedEventFilter<
      [string, string, string],
      { platform: string; token: string; syntheticToken: string }
    >;

    TokenOnPlatformUpdated(
      platform?: null,
      token?: null,
      syntheticToken?: null
    ): TypedEventFilter<
      [string, string, string],
      { platform: string; token: string; syntheticToken: string }
    >;
  };

  estimateGas: {
    accountOwner(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addBatchPlatformsWithAdapter(
      platforms: string[],
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCTokenOnPlatform(
      platform: string,
      token: string,
      synthToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addExchangerWithAdapter(
      flag: BytesLike,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addImplementation(
      _implementation: string,
      _sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPlatformWithAdapter(
      platform: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeExchangerAdapter(
      flag: BytesLike,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changePlatformAdapter(
      platform: string,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fodlNFT(overrides?: CallOverrides): Promise<BigNumber>;

    getCToken(
      platform: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExchangerAdapter(
      flag: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlatformAdapter(
      platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      fodlNFT_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeCTokenFromPlatform(
      platform: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeExchanger(
      flag: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeImplementation(
      sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePlatform(
      platform: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNFT(
      fodlNFTV2_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountOwner(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addBatchPlatformsWithAdapter(
      platforms: string[],
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCTokenOnPlatform(
      platform: string,
      token: string,
      synthToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addExchangerWithAdapter(
      flag: BytesLike,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addImplementation(
      _implementation: string,
      _sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPlatformWithAdapter(
      platform: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeExchangerAdapter(
      flag: BytesLike,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changePlatformAdapter(
      platform: string,
      newAdapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fodlNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCToken(
      platform: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExchangerAdapter(
      flag: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImplementation(
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlatformAdapter(
      platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      fodlNFT_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCTokenFromPlatform(
      platform: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeExchanger(
      flag: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeImplementation(
      sigs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePlatform(
      platform: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNFT(
      fodlNFTV2_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
