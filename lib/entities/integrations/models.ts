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
    id: number;
    name: string;
    type: IIntegrationType;
    data: IIntegrationData;
};