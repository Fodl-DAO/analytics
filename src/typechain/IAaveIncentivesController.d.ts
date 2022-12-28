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

interface IAaveIncentivesControllerInterface extends ethers.utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "REWARD_TOKEN()": FunctionFragment;
    "claimRewards(address[],uint256,address)": FunctionFragment;
    "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
    "configureAssets(address[],uint256[])": FunctionFragment;
    "getAssetData(address)": FunctionFragment;
    "getClaimer(address)": FunctionFragment;
    "getDistributionEnd()": FunctionFragment;
    "getRewardsBalance(address[],address)": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
    "getUserUnclaimedRewards(address)": FunctionFragment;
    "handleAction(address,uint256,uint256)": FunctionFragment;
    "setClaimer(address,address)": FunctionFragment;
    "setDistributionEnd(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsOnBehalf",
    values: [string[], BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetData",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getClaimer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDistributionEnd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsBalance",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUnclaimedRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAction",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistributionEnd",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDistributionEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUnclaimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDistributionEnd",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveIncentivesController extends BaseContract {
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

  interface: IAaveIncentivesControllerInterface;

  functions: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configureAssets(
      assets: string[],
      emissionsPerSecond: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAssetData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<[string]>;

    getDistributionEnd(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserUnclaimedRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDistributionEnd(
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

  claimRewards(
    assets: string[],
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewardsOnBehalf(
    assets: string[],
    amount: BigNumberish,
    user: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configureAssets(
    assets: string[],
    emissionsPerSecond: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAssetData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getClaimer(user: string, overrides?: CallOverrides): Promise<string>;

  getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

  getRewardsBalance(
    assets: string[],
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserAssetData(
    user: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserUnclaimedRewards(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    asset: string,
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimer(
    user: string,
    claimer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDistributionEnd(
    distributionEnd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      assets: string[],
      emissionsPerSecond: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAssetData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<string>;

    getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDistributionEnd(
      distributionEnd: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configureAssets(
      assets: string[],
      emissionsPerSecond: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAssetData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDistributionEnd(
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configureAssets(
      assets: string[],
      emissionsPerSecond: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAssetData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimer(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDistributionEnd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUnclaimedRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDistributionEnd(
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
