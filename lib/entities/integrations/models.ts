/** @format */

import {IntegrationType} from "./enums";

export type IIntegrationType = {
    type: IntegrationType
    value: string;
};

export interface IIntegrationData { }

export interface IWebhooksIntegrationData extends IIntegrationData {
    url: string;
}

/**
 * Represents an Integration object.
 */
export type IIntegration = {
    identifier: string;
    name: string;
    type: IIntegrationType;
    data: IIntegrationData;
};

/**
 * Represents the payload required to create an integration.
 */
export type ICreateIntegrationPayload = Omit<IIntegration, "identifier">;