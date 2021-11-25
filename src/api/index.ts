/** @format */

import { IAuthStrategy, TokenManager } from "../auth";
import * as Entities from "../entities";
import { NetworkClient } from "../network";

export class ApiClient {
  private tokenManager: TokenManager;
  private networkClient: NetworkClient;

  private alerts: Entities.Alerts;

  constructor(authStrategy: IAuthStrategy) {
    this.tokenManager = new TokenManager(authStrategy);
    this.networkClient = new NetworkClient(this.tokenManager);
    this.alerts = new Entities.Alerts(this.networkClient);
  }

  async authenticate(): Promise<string | undefined> {
    return await this.tokenManager.authenticate();
  }

  getEntities() {
    return {
      Alerts: this.alerts,
    };
  }
}
