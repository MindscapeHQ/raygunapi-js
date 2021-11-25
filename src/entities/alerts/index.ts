/** @format */
import { GlobalConfig } from "../../config";
import { Models, buildApiUrl, NetworkClient } from "../../network";
import { IPagedEntity } from "../../models";

import { IAlert, IAlertSummary } from "./models";
import { wrapWithErrorHandler } from "../../network/utils";

export class Alerts {
  baseUrl: string = "alerts";

  networkClient: NetworkClient;

  constructor(networkClient: NetworkClient) {
    this.networkClient = networkClient;
  }

  /**
   * Retrieves an alert matching the given identifier
   * @param identifier - Id related to a specific alert
   * @returns A single alert or null if not found;
   */
  public async get(identifier: string): Promise<IAlert | null> {
    let urlSegments = [GlobalConfig.planIdentifier, this.baseUrl, identifier];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IAlert>(url);
      return res;
    });
  }

  /**
   * Retrieves a list of alerts
   * @param planIdentifier - Identifier of the target plan
   * @param subscribedOnly - If true, only subscribed alerts will be returned
   * @param page - The page number to return
   * @param pageSize - The number of items per page. Max is 100
   * @returns An array of {AlertSummary} objects
   */
  async getAll(planIdentifier: string, subscribedOnly: boolean = false, page: number = 1, pageSize = 20): Promise<IPagedEntity<IAlertSummary> | null> {
    let urlSegments = ["user", GlobalConfig.userIdentifier, this.baseUrl, planIdentifier];

    var queryParams: Models.IQueryParams = {
      subscribedOnly,
      page,
      pageSize,
    };

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      return await this.networkClient.get<IPagedEntity<IAlertSummary>>(url, queryParams);
    });
  }
}
