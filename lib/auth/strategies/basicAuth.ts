/** @format */

import { wrapWithErrorHandler } from "../../network/utils";
import { IAuthStrategy, TokenServerResponse } from "../models";
import { toFormUrlEncoded } from "../utils";

/**
 * Retrieves a JWT token from the Raygun API using basic authentication.
 * @class ProxyAuthStrategy
 * @implements IAuthStrategy
 */
export class BasicAuthStrategy implements IAuthStrategy {
  baseUrl: string = "https://auth.raygun.com/connect/token";
  clientId: string;
  clientSecret: string;

  /**
   * Constructor
   * @param clientId - Identifier of the requesting client.
   * @param clientSecret - Secret of the requesting client.
   */
  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  /**
   * Authenticate a user with the Raygun API.
   * @returns JWT Token if successful, otherwise null.
   */
  async authenticate(): Promise<string | undefined> {
    const payload = {
      grant_type: "client_credentials",
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    return await wrapWithErrorHandler(async () => {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: toFormUrlEncoded(payload),
      });

      const json: TokenServerResponse = await response.json();
      return json.access_token;
    });
  }
}
