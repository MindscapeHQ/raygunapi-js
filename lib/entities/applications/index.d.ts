/** @format */
import { NetworkClient } from "../../network";
import { IApplication } from "./models";
import { IApplications } from "../plans/models";
export declare class Applications {
    networkClient: NetworkClient;
    baseUrl: string;
    constructor(networkClient: NetworkClient);
    /**
     * Retrieve an application that matches the specified identifier.
     * @param _planIdentifier - Identifier of the plan that the application belongs to.
     * @param identifier - Identifier of the application to retrieve.
     * @returns A single application or null if not found.
     */
    get(_planIdentifier: string, identifier: string): Promise<IApplication | undefined>;
    /**
     * Retrieve all applications that matches the specified plan identifier
     * @param _planIdentifier - Identifier of the plan that the application belongs to.
     * @returns All applications on the plan including its relevent information about the app
     */
    getAll(_planIdentifier: string): Promise<IApplications[] | undefined>;
}
