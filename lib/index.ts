/** @format */
import { ApiClient } from "./api";
import { AuthStrategies, IAuthStrategy } from "./auth";
import * as Models from "./models";
import * as Entities from "./entities";
import { GlobalConfig } from "./config";

export type IClientOptions = {
  authStrategy: IAuthStrategy;
  userIdentifier: string;
};

export type IRaygunClient = {
  authenticate: () => Promise<string | undefined>;
  refreshToken: () => Promise<string | undefined>;
  Alerts: Entities.Alerts;
  Models: typeof Models;
};

export function createClient({ authStrategy, userIdentifier }: IClientOptions) {
  GlobalConfig.userIdentifier = userIdentifier;

  const apiClient = new ApiClient(authStrategy);

  const authenticate: () => Promise<string | undefined> = async () => apiClient.authenticate();
  const refreshToken: () => Promise<string | undefined> = async () => apiClient.refreshToken();
  const entities = apiClient.getEntities();

  return {
    authenticate,
    refreshToken,
    ...entities,
    Models,
  };
}

export { AuthStrategies };
