/** @format */
import { ApiClient } from "./api";
import { AuthStrategies, IAuthStrategy } from "./auth";
import * as Models from "./models";
import { GlobalConfig } from "./config";

export type IClientOptions = {
  authStrategy: IAuthStrategy;
  userIdentifier: string;
  logFunc?: (message: any) => void;
};

export function createClient({ authStrategy, userIdentifier, logFunc }: IClientOptions): Models.IRaygunClient {
  GlobalConfig.userIdentifier = userIdentifier;
  GlobalConfig.logFunc = logFunc;

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
