/** @format */

import { buildApiUrl, NetworkClient } from "../../network";
import { wrapWithErrorHandler } from "../../network/utils";
import { IApplication } from "./models";

export class Applications {
  networkClient: NetworkClient;
  baseUrl: string = "applications";

  constructor(networkClient: NetworkClient) {
    this.networkClient = networkClient;
  }

  /**
   * Retrieve an application that matches the specified identifier.
   * @param _planIdentifier - Identifier of the plan that the application belongs to.
   * @param identifier - Identifier of the application to retrieve.
   * @returns A single application or null if not found.
   */
  public async get(_planIdentifier: string, identifier: string): Promise<IApplication | undefined> {
    const urlSegments = [this.baseUrl, identifier];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IApplication>(url);
      return res;
    });
  }

  public async getAll(_planIdentifier:string): Promise<IApplication[] | undefined> {
    const urlSegments = ["plans", _planIdentifier, this.baseUrl];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IApplication[]>(url);
      return res;
    });
  }
}
