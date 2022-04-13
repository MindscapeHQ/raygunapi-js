/** @format */

import { GlobalConfig } from "../../config";
import { buildApiUrl, IQueryParams, NetworkClient } from "../../network";
import { addQueryStringParams, wrapWithErrorHandler } from "../../network/utils";
import { ICreateIntegrationPayload, IIntegration } from "./models";

export * from "./enums";

export class Integrations {
  networkClient: NetworkClient;
  baseUrl: string = "integrations";

  constructor(networkClient: NetworkClient) {
      this.networkClient = networkClient;
  }

  /**
   * Retrieve all integrations that matches the specified plan identifier
   * @param planIdentifier - Identifier of the plan that the integration belongs to.
   * @param showData - Determines whether the returned payload has IntegrationData attached to it.
   * @returns All integrations on the plan including its relevant information about the integration
   */
  public async getAll(planIdentifier: string, showData: boolean = false): Promise<IIntegration[] | undefined> {
      const urlSegments = [planIdentifier, this.baseUrl];
      const queryStringParameters = {["showData"] : showData}
         return await wrapWithErrorHandler(async () => {
            const url = buildApiUrl(urlSegments);
            const fullUrl = addQueryStringParams(url, queryStringParameters);
           console.log(fullUrl);
            const res = await this.networkClient.get<IIntegration[]>(url);
            return res;
        });
    }

  /**
   * Create a new integration for the given plan
   * @param planIdentifier - Identifier of the target plan
   * @param integration - The integration payload to create a new integration
   * @returns The created integration
   */
  async create(planIdentifier: string, integration: ICreateIntegrationPayload): Promise<IIntegration | undefined> {
    let urlSegments = [planIdentifier, this.baseUrl];

    var queryParams: IQueryParams = {
      userIdentifier: GlobalConfig.userIdentifier,
    };

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.post<IIntegration>(url, integration, queryParams);
      return res;
    });
  }
}
