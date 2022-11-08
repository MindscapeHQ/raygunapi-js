/** @format */

import { IntegrationType } from "./enums";

export type IWebhooksIntegrationData = {
  url: string;
}

export type ISlackIntegrationData = {
  accessToken: string | null;
  teamId: string | null;
  botUserId: string |null;
}

export type IMicrosoftTeamsIntegrationData = {
  teamId: string | null;
  serviceUrl: string | null;
}

export type IIntegration = {
    identifier: string;
    name: string;
    type: IntegrationType;
    data: IWebhooksIntegrationData | ISlackIntegrationData | IMicrosoftTeamsIntegrationData;
};

/**
 * Represents the payload required to create an integration.
 */
export type ICreateIntegrationPayload = Omit<IIntegration, "identifier">;
