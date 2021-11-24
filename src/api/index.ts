/** @format */

import { IAuthStrategy, TokenManager } from "../auth";

export class ApiClient {
  private _tokenManager;

  constructor(authStrategy: IAuthStrategy) {
    this._tokenManager = new TokenManager(authStrategy);
  }

  async authenticate(): Promise<void> {
    await this._tokenManager.authenticate();
  }
}
