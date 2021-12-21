import { NetworkClient } from "../../network";
import { IPagedEntity } from "../../models";
import { IAlert, IAlertSummary, ICreateAlertPayload, IUpdateAlertPayload } from "./models";
export * from "./enums";
export declare class Alerts {
    baseUrl: string;
    networkClient: NetworkClient;
    constructor(networkClient: NetworkClient);
    /**
     * Retrieve an alert matching the given identifier
     * @param planIdentifier - Identifier of the target plan
     * @param identifier - Id related to a specific alert
     * @returns A single alert or null if not found;
     */
    get(planIdentifier: string, identifier: string): Promise<IAlert | undefined>;
    /**
     * Retrieve a list of alerts for a given plan.
     * @param planIdentifier - Identifier of the target plan
     * @param subscribedOnly - If true, only subscribed alerts will be returned
     * @param page - The page number to return
     * @param pageSize - The number of items per page. Max is 100
     * @returns An array of {AlertSummary} objects
     */
    getAll(planIdentifier: string, subscribedOnly?: boolean, page?: number, pageSize?: number): Promise<IPagedEntity<IAlertSummary> | undefined>;
    /**
     * Create a new alert for the given plan
     * @param planIdentifier - Identifier of the target plan
     * @param alert - The alert to create
     * @returns The created alert
     */
    create(planIdentifier: string, alert: ICreateAlertPayload): Promise<IAlert | undefined>;
    /**
     * Create a new alert for the given plan
     * @param planIdentifier - Identifier of the target plan
     * @param alertIdentifier - Identifier of the alert to update
     * @param alert - The new version of the alert
     * @returns The updated alert
     */
    update(planIdentifier: string, alertIdentifier: string, alert: IUpdateAlertPayload): Promise<IAlert | undefined>;
    /**
     * Subscribe the current user to a given alert
     * @param planIdentifier - Identifier of the target plan
     * @param identifier - Id related to a specific alert
     * @returns {boolean} - True if subscribing was successful
     */
    subscribe(planIdentifier: string, identifier: string): Promise<void>;
    /**
     * Unsubscribe the current user to a given alert
     * @param planIdentifier - Identifier of the target plan
     * @param identifier - Id related to a specific alert
     * @returns {boolean} - True if unsubscribing was successful
     */
    unsubscribe(planIdentifier: string, identifier: string): Promise<void>;
    /**
     * Delete an alert matching the given identifier for the given plan.
     * @param planIdentifier - Identifier of the target plan
     * @param identifier - Id related to a specific alert
     */
    delete(planIdentifier: string, identifier: string): Promise<void>;
}
