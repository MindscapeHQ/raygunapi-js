/** @format */

import { IntegrationType } from "./enums";

export type IWebhooksIntegrationData = {
  url: string;
}

// The reason why some of these properties have the null type
// is because they are marked as sensitive properties,
// so they may come back as null from our public api.
// When adding more properties, check if they are sensitive on the public api
// If they are, only then give them the null type

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
