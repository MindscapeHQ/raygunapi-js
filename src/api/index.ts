/** @format */

import { GlobalConfig } from "../config";

export class ApiClient {
  constructor(userIdentifier: string, planIdentifier: string) {
    GlobalConfig.userIdentifier = userIdentifier;
    GlobalConfig.planIdentifier = planIdentifier;
  }
}
