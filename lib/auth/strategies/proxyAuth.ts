/** @format */

import { wrapWithErrorHandler } from "../../network/utils";
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
    return await wrapWithErrorHandler(async () => {
      const res = await fetch(this.proxyUrl);
      return await res.json();
    });
  }
}
