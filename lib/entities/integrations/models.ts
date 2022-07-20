/** @format */

import { IntegrationType } from "./enums";

export type IWebhooksIntegrationData = {
  url: string;
}

export type ISlackIntegrationData = {
  accessToken: string | null;
  teamId: string;
  botUserId: string;
}

export type IIntegration = {
    identifier: string;
    name: string;
    type: IntegrationType;
    data: IWebhooksIntegrationData | ISlackIntegrationData;
};

/**
 * Represents the payload required to create an integration.
 */
export type ICreateIntegrationPayload = Omit<IIntegration, "identifier">;
