/** @format */

import {buildApiUrl, NetworkClient} from "../../network";
import {IIntegration} from "./models";
import {wrapWithErrorHandler} from "../../network/utils";

export class Integrations {
    networkClient: NetworkClient;
    baseUrl: string = "integrations";

    constructor(networkClient: NetworkClient) {
        this.networkClient = networkClient;
    }

    /**
     * Retrieve all integrations that matches the specified plan identifier
     * @param planIdentifier - Identifier of the plan that the integration belongs to.
     * @returns All integrations on the plan including its relevant information about the app
     */
    public async getAll(planIdentifier:string): Promise<IIntegration[] | undefined> {
        const urlSegments = [planIdentifier, this.baseUrl];

         return await wrapWithErrorHandler(async () => {
            const url = buildApiUrl(urlSegments);
            const res = await this.networkClient.get<IIntegration[]>(url);
            return res;
        });
    }
}
