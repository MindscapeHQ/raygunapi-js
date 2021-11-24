/** @format */

import Network from "../../network";
import { IAuthStrategy } from "../models";

/**
 * Retrieves a Raygun API JWT token from a proxy endpoint.
 * @class ProxyAuthStrategy
 * @implements IAuthStrategy
 */
export class ProxyAuthStrategy implements IAuthStrategy {
  proxyUrl: string;

  /**
   * Constructor
   * @param proxyUrl - The URL of the proxy endpoint that will return the JWT.
   */
  constructor(proxyUrl: string) {
    this.proxyUrl = proxyUrl;
  }

  /**
   * Authenticate a user with the Raygun API.
   * @returns JWT Token if successful, otherwise null.
   */
  async authenticate(): Promise<string | undefined> {
    try {
      return await Network.get<string>(this.proxyUrl);
    } catch (error) {
      return undefined;
    }
  }
}
