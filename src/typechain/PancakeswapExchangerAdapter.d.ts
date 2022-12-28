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

interface PancakeswapExchangerAdapterInterface extends ethers.utils.Interface {
  functions: {
    "ROUTER()": FunctionFragment;
    "exchange(address,address,uint256,uint256,bytes)": FunctionFragment;
    "getAmountIn(address,address,uint256)": FunctionFragment;
    "getAmountOut(address,address,uint256)": FunctionFragment;
    "swapFromExact(address,address,uint256,uint256)": FunctionFragment;
    "swapToExact(address,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ROUTER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapFromExact",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToExact",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ROUTER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapFromExact",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToExact",
    data: BytesLike
  ): Result;

  events: {};
}

export class PancakeswapExchangerAdapter extends BaseContract {
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

  interface: PancakeswapExchangerAdapterInterface;

  functions: {
    ROUTER(overrides?: CallOverrides): Promise<[string]>;

    exchange(
      fromToken: string,
      toToken: string,
      fromAmount: BigNumberish,
      minToAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountIn(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAmountOut(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swapFromExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapToExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ROUTER(overrides?: CallOverrides): Promise<string>;

  exchange(
    fromToken: string,
    toToken: string,
    fromAmount: BigNumberish,
    minToAmount: BigNumberish,
    exchangeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountIn(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountOut(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapFromExact(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapToExact(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ROUTER(overrides?: CallOverrides): Promise<string>;

    exchange(
      fromToken: string,
      toToken: string,
      fromAmount: BigNumberish,
      minToAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountIn(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOut(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapFromExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapToExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    exchange(
      fromToken: string,
      toToken: string,
      fromAmount: BigNumberish,
      minToAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountIn(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOut(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapFromExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapToExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchange(
      fromToken: string,
      toToken: string,
      fromAmount: BigNumberish,
      minToAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountIn(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountOut(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapFromExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapToExact(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
