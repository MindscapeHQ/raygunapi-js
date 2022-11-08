/** @format */

import { GlobalConfig } from "../../config";
import { buildApiUrl, IQueryParams, NetworkClient } from "../../network";
import { wrapWithErrorHandler } from "../../network/utils";
import { ICreateIntegrationPayload, IIntegration } from "./models";

export * from "./enums";

export class Integrations {
  networkClient: NetworkClient;
  baseUrl: string = "integrations";

  constructor(networkClient: NetworkClient) {
      this.networkClient = networkClient;
  }

  /**
   * Retrieve an integration matching the given identifier
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific integration
   * @returns A single integration or null if not found;
   */
  public async get(planIdentifier: string, identifier: string): Promise<IIntegration | undefined> {
    const urlSegments = [planIdentifier, this.baseUrl, identifier];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IIntegration>(url);
      return res;
    });
  }

  /**
   * Retrieve all integrations that matches the specified plan identifier
   * @param planIdentifier - Identifier of the plan that the integration belongs to.
   * @returns All integrations on the plan including its relevant information about the integration
   */
  public async getAll(planIdentifier: string): Promise<IIntegration[] | undefined> {
    const urlSegments = [planIdentifier, this.baseUrl];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
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

  /**
   * Delete an integration matching the given identifier for the given plan
   * @param planIdentifier - Identifier of the target plan
   * @param identifier - Id related to a specific integration
   * @param userId - Id of the user logged in
   */
  async delete(planIdentifier: string, identifier: string, userId: string): Promise<void> {
    let urlSegments = [planIdentifier, this.baseUrl, identifier];

    const queryParams: IQueryParams = {
      userId: userId,
    }

    await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      await this.networkClient.deleteFromApi(url, queryParams);
    });
  }
}

