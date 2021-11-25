/** @format */
import { ApiClient } from "./api";
import { AuthStrategies, IAuthStrategy } from "./auth";
import * as Models from "./models";
import { GlobalConfig } from "./config";

export type IClientOptions = {
  authStrategy: IAuthStrategy;
  userIdentifier: string;
};

export function createClient({ authStrategy, userIdentifier }: IClientOptions) {
  GlobalConfig.userIdentifier = userIdentifier;

  const apiClient = new ApiClient(authStrategy);

  const authenticate: () => Promise<string | undefined> = async () => apiClient.authenticate();

  const entities = apiClient.getEntities();

  return {
    authenticate,
    ...entities,
    Models,
  };
}

export { AuthStrategies };
