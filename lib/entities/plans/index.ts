/** @format **/

import { buildApiUrl, NetworkClient } from "../../network";
import { wrapWithErrorHandler } from "../../network/utils";
import { IApplications } from "./models";

export class Plans {
  networkClient: NetworkClient;
  baseUrl: string = "applications";

  constructor(networkClient: NetworkClient) {
    this.networkClient = networkClient;
  }

  /**
   * Retrieve all applications that matches the specified plan identifier
   * @param _planIdentifier - Identifier of the plan that the application belongs to.
   * @returns All applications on the plan including its relevent information about the app
   */

  public async getAllApplications(_planIdentifier:string): Promise<IApplications[] | undefined> {
    const urlSegments = ["plans", _planIdentifier, this.baseUrl];

    return await wrapWithErrorHandler(async () => {
      const url = buildApiUrl(urlSegments);
      const res = await this.networkClient.get<IApplications[]>(url);
      return res;
    });
  }
}
