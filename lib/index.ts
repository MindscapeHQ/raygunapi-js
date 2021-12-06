/** @format */
import { ApiClient } from "./api";
import { AuthStrategies, IAuthStrategy } from "./auth";
import * as Models from "./models";
import { GlobalConfig } from "./config";

export type IClientOptions = {
  authStrategy: IAuthStrategy;
  userIdentifier: string;
  logFunc?: (message: any) => void;
  apiUrl?: string;
};

export function createClient({ authStrategy, userIdentifier, logFunc, apiUrl = "https://publicapi.raygun.com/api/v2" }: IClientOptions): Models.IRaygunClient {
  GlobalConfig.userIdentifier = userIdentifier;
  GlobalConfig.logFunc = logFunc;
  GlobalConfig.apiUrl = apiUrl;

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
