/** @format */
import { ApiClient } from "./api";
import { AuthStrategies } from "./auth";
import * as Models from "./models";
import * as Entities from "./entities";
import { IAuthStrategy } from "./auth/models";

export function createClient(authStrategy: IAuthStrategy) {
  const apiClient = new ApiClient(authStrategy);

  const Alerts = new Entities.Alerts(apiClient);

  const authenticate = () => apiClient.authenticate();

  return {
    authenticate,
    Alerts,
    Models,
  };
}

export { AuthStrategies };
