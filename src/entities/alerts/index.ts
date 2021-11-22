/** @format */
import { GlobalConfig } from "../../config";
import Network, { Models } from "../../network";
import { IPagedEntity } from "../../models";

import { IAlert, IAlertSummary } from "./models";

export class Alerts {
  baseUrl: string = "alerts";

  /**
   * Retrieves an alert matching the given identifier
   * @param identifier - Id related to a specific alert
   * @returns A single alert or null if not found;
   */
  public async get(identifier: string): Promise<IAlert | null> {
    let urlSegments = [GlobalConfig.planIdentifier, this.baseUrl, identifier];

    try {
      const url = Network.buildApiUrl(urlSegments);
      const res = await Network.get<IAlert>(url);
      return res;
    } catch (err) {
      return null;
    }
  }

  async getAll(subscribedOnly: boolean = false, page: number = 1, pageSize = 20): Promise<IPagedEntity<IAlertSummary> | null> {
    let urlSegments = ["user", GlobalConfig.userIdentifier, this.baseUrl, GlobalConfig.planIdentifier];

    var queryParams: Models.IQueryParams = {
      subscribedOnly,
      page,
      pageSize,
    };

    try {
      const url = Network.buildApiUrl(urlSegments);
      const res = await Network.get<IPagedEntity<IAlertSummary>>(url, queryParams);
      return res;
    } catch (err) {
      return null;
    }
  }
}
