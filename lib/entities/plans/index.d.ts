/** @format */
import { NetworkClient } from "../../network";
import { IApplications } from "./models";
export declare class Plans {
    networkClient: NetworkClient;
    baseUrl: string;
    constructor(networkClient: NetworkClient);
    /**
     * Retrieve all applications that matches the specified plan identifier
     * @param _planIdentifier - Identifier of the plan that the application belongs to.
     * @returns All applications on the plan including its relevent information about the app
     */
    getAllApplications(_planIdentifier: string): Promise<IApplications[] | undefined>;
}
