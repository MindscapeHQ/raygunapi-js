/** @format */

import { IntegrationType } from "./enums";

export type IWebhooksIntegrationData = {
  url: string;
}

export type IIntegration = {
    identifier: string;
    name: string;
    type: IntegrationType;
    data: IWebhooksIntegrationData;
};

/**
 * Represents the payload required to create an integration.
 */
export type ICreateIntegrationPayload = Omit<IIntegration, "identifier">;
