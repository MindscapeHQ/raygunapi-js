/** @format */

import Network from "../../network";
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
  async authenticate(): Promise<undefined> {
    const payload = {
      grant_type: "client_credentials",
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    try {
      const response = await Network.post<TokenServerResponse>(
        this.baseUrl,
        toFormUrlEncoded(payload),
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      return response.access_token;
    } catch (error) {
      return undefined;
    }
  }
}
