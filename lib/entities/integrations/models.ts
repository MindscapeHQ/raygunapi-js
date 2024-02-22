/** @format */

import { IntegrationType } from "./enums";

export type IWebhooksIntegrationData = {
  url: string;
}

/**
 * The reason why these properties have a null type
 * is because they're marked as sensitive properties.
 * So they may come back as null from our Public API.
 * When adding more properties, check if they are sensitive on the Public API.
 * If they are, only then give them the null type.
 */

export type ISlackIntegrationData = {
  accessToken: string | null;
  teamId: string | null;
  botUserId: string | null;
}

export type IMicrosoftTeamsIntegrationData = {
  teamId: string | null;
  serviceUrl: string;
  groupId: string | null;
  tenantId: string | null;
}

export type IOpenAiIntegrationData = {
  apiKey: string | null;
  model: string | null;
}

export type IIntegration = {
    identifier: string;
    name: string;
    type: IntegrationType;
    data: IWebhooksIntegrationData | ISlackIntegrationData | IMicrosoftTeamsIntegrationData | IOpenAiIntegrationData;
};

/**
 * Represents the payload required to create an integration.
 */
export type ICreateIntegrationPayload = Omit<IIntegration, "identifier">;
