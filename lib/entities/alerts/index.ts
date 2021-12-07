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
   * Retrieve an alert matching the given identifier
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific alert
   * @returns A single alert or null if not found;
   */
  public async get(planIdentifier: string, identifier: string): Promise<IAlert | undefined> {
    const urlSegments = [planIdentifier, this.baseUrl, identifier];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IAlert>(url);
      return res;
    });
  }

  /**
   * Retrieve a list of alerts for a given plan.
   * @param planIdentifier - Identifier of the target plan
   * @param subscribedOnly - If true, only subscribed alerts will be returned
   * @param page - The page number to return
   * @param pageSize - The number of items per page. Max is 100
   * @returns An array of {AlertSummary} objects
   */
  async getAll(planIdentifier: string, subscribedOnly: boolean = false, page: number = 1, pageSize = 20): Promise<IPagedEntity<IAlertSummary> | undefined> {
    const urlSegments = ["user", GlobalConfig.userIdentifier, this.baseUrl, planIdentifier];

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

  /**
   * Create a new alert for the given plan
   * @param planIdentifier - Identifier of the target plan
   * @param alert - The alert to create
   * @returns The created alert
   */
  async create(planIdentifier: string, alert: IAlert): Promise<IAlert | undefined> {
    let urlSegments = [planIdentifier, this.baseUrl];

    var queryParams: Models.IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.post<IAlert>(url, alert, queryParams);
      return res;
    });
  }

  /**
   * Create a new alert for the given plan
   * @param planIdentifier - Identifier of the target plan
   * @param alert - The new version of the alert
   * @returns The updated alert
   */
  async update(planIdentifier: string, alert: IAlert): Promise<IAlert | undefined> {
    let urlSegments = [planIdentifier, this.baseUrl, alert.identifier];

    var queryParams: Models.IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.put<IAlert>(url, alert, queryParams);
      return res;
    });
  }

  /**
   * Subscribe the current user to a given alert
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific alert
   * @returns {boolean} - True if subscribing was successful
   */
  async subscribe(planIdentifier: string, identifier: string): Promise<void> {
    let urlSegments = [planIdentifier, this.baseUrl, identifier, "subscribe"];

    var queryParams: Models.IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      await this.networkClient.put<boolean>(url, undefined, queryParams);
    });
  }

  /**
   * Unsubscribe the current user to a given alert
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific alert
   * @returns {boolean} - True if unsubscribing was successful
   */
  async unsubscribe(planIdentifier: string, identifier: string): Promise<void> {
    let urlSegments = [planIdentifier, this.baseUrl, identifier, "unsubscribe"];

    var queryParams: Models.IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      await this.networkClient.put(url, undefined, queryParams);
    });
  }

  /**
   * Delete an alert matching the given identifier for the given plan.
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific alert
   */
  async delete(planIdentifier: string, identifier: string): Promise<void> {
    let urlSegments = [planIdentifier, this.baseUrl, identifier];

    var queryParams: Models.IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      await this.networkClient.deleteFromApi(url, undefined, queryParams);
    });
  }
}
