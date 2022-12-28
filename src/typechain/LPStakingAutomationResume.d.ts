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

interface LPStakingAutomationResumeInterface extends ethers.utils.Interface {
  functions: {
    "changeTreasury(address)": FunctionFragment;
    "fodlEthSLPStaking()": FunctionFragment;
    "fodlToken()": FunctionFragment;
    "fodlUsdcSLPStaking()": FunctionFragment;
    "notifyRewards()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardNumber()": FunctionFragment;
    "transferLPStakingOwnership(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "fodlEthSLPStaking",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fodlToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fodlUsdcSLPStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferLPStakingOwnership",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "changeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fodlEthSLPStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fodlToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fodlUsdcSLPStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferLPStakingOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class LPStakingAutomationResume extends BaseContract {
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

  interface: LPStakingAutomationResumeInterface;

  functions: {
    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fodlEthSLPStaking(overrides?: CallOverrides): Promise<[string]>;

    fodlToken(overrides?: CallOverrides): Promise<[string]>;

    fodlUsdcSLPStaking(overrides?: CallOverrides): Promise<[string]>;

    notifyRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferLPStakingOwnership(
      stakingContract: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  changeTreasury(
    newTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fodlEthSLPStaking(overrides?: CallOverrides): Promise<string>;

  fodlToken(overrides?: CallOverrides): Promise<string>;

  fodlUsdcSLPStaking(overrides?: CallOverrides): Promise<string>;

  notifyRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardNumber(overrides?: CallOverrides): Promise<BigNumber>;

  transferLPStakingOwnership(
    stakingContract: string,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    changeTreasury(
      newTreasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fodlEthSLPStaking(overrides?: CallOverrides): Promise<string>;

    fodlToken(overrides?: CallOverrides): Promise<string>;

    fodlUsdcSLPStaking(overrides?: CallOverrides): Promise<string>;

    notifyRewards(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardNumber(overrides?: CallOverrides): Promise<BigNumber>;

    transferLPStakingOwnership(
      stakingContract: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
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
  };

  estimateGas: {
    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fodlEthSLPStaking(overrides?: CallOverrides): Promise<BigNumber>;

    fodlToken(overrides?: CallOverrides): Promise<BigNumber>;

    fodlUsdcSLPStaking(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardNumber(overrides?: CallOverrides): Promise<BigNumber>;

    transferLPStakingOwnership(
      stakingContract: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fodlEthSLPStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fodlToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fodlUsdcSLPStaking(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferLPStakingOwnership(
      stakingContract: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
