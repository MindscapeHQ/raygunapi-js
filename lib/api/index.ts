/** @format */

import { IAuthStrategy, TokenManager } from "../auth";
import { NetworkClient } from "../network";
import { Alerts, Applications, Plans } from "../entities";

export class ApiClient {
  private tokenManager: TokenManager;
  private networkClient: NetworkClient;

  private alerts: Alerts;
  private applications: Applications;
  private plans: Plans;

  constructor(authStrategy: IAuthStrategy, persistToken: boolean) {
    this.tokenManager = new TokenManager(authStrategy, persistToken);
    this.networkClient = new NetworkClient(this.tokenManager);
    this.alerts = new Alerts(this.networkClient);
    this.applications = new Applications(this.networkClient);
    this.plans = new Plans(this.networkClient);
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
      Plans: this.plans,
    };
  }
}
