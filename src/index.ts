/** @format */
import { ApiClient } from "./api";
import * as Models from "./models";
import * as Entities from "./entities";

export function createClient(userIdentifier: string, planIdentifier: string) {
  const apiClient = new ApiClient(userIdentifier, planIdentifier);
  const Alerts = new Entities.Alerts();

  return {
    Alerts,
    Models,
  };
}
