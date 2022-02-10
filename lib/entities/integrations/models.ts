/** @format */

import { IntegrationType } from "./enums";

export type IIntegrationType = {
    type: IntegrationType
    value: string;
};

export type IWebhooksIntegrationData = {
    url: string;
}

export type IIntegration = {
    identifier: string;
    name: string;
    type: IIntegrationType;
    data: IWebhooksIntegrationData;
};