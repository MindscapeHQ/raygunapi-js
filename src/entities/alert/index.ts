/** @format */
import { GlobalConfig } from "../../config";
import Network from "../../network";
import { IAlert } from "./models";

export class Alerts {
  baseUrl: string = "alerts";

  /**
   * Retrieves alerts for the current user
   * @param identifier - Id related to a specific alert
   * @returns A single alert or an array of alerts
   */
  async get(identifier?: string): Promise<IAlert> {
    let urlSegments = [];

    if (identifier) {
      urlSegments = [GlobalConfig.planId, this.baseUrl, identifier];
    } else {
      urlSegments = ["user", GlobalConfig.userId, this.baseUrl, GlobalConfig.planId];
    }

    const url = Network.buildApiUrl(urlSegments);
    const res = await Network.get<IAlert>(url);
    return res;
  }
}
