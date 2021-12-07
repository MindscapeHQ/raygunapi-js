/** @format */

import { IAuthStrategy, TokenManager } from "../auth";
import { NetworkClient } from "../network";
import * as Entities from "../entities";

export class ApiClient {
  private tokenManager: TokenManager;
  private networkClient: NetworkClient;

  private alerts: Entities.Alerts;
  private applications: Entities.Applications;

  constructor(authStrategy: IAuthStrategy, persistToken: boolean) {
    this.tokenManager = new TokenManager(authStrategy, persistToken);
    this.networkClient = new NetworkClient(this.tokenManager);
    this.alerts = new Entities.Alerts(this.networkClient);
    this.applications = new Entities.Applications(this.networkClient);
  }

  async authenticate(): Promise<string | undefined> {
    return await this.tokenManager.authenticate();
  }

  async refreshToken(): Promise<string | undefined> {
    return await this.tokenManager.refreshToken();
  }

  getEntities() {
    return {
      Alerts: this.alerts,
      Applications: this.applications,
    };
  }
}
