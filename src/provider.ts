import { StaticJsonRpcProvider, WebSocketProvider } from '@ethersproject/providers';
import Bottleneck from "bottleneck";
export class ConcurrencyJsonRpcProvider extends StaticJsonRpcProvider {
  private limit: any

  constructor(url: string, opts: Bottleneck.ConstructorOptions) {
    super(url)
    const limiter = new Bottleneck(opts);
    this.limit = limiter.wrap(super.send)     
  }

  send(method: string, params: Array<any>): Promise<any> {
    return this.limit(method, params)
  }
}

export class ConcurrencyWebSocketProvider extends WebSocketProvider {
  private limit: any

  constructor(url: string, opts: Bottleneck.ConstructorOptions) {
    super(url)
    const limiter = new Bottleneck(opts);
    this.limit = limiter.wrap(super.send)     
  }

  send(method: string, params: Array<any>): Promise<any> {
    return this.limit(method, params)
  }
}

export const newProvider = (url: string, opts: Bottleneck.ConstructorOptions) =>
  new (url.includes('http') ? ConcurrencyJsonRpcProvider : ConcurrencyWebSocketProvider)(url, opts)
