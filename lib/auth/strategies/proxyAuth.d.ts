/** @format */
import { IAuthStrategy } from "../models";
/**
 * Retrieves a Raygun API JWT token from a proxy endpoint.
 * @class ProxyAuthStrategy
 * @implements IAuthStrategy
 */
export declare class ProxyAuthStrategy implements IAuthStrategy {
    proxyUrl: string;
    /**
     * Constructor
     * @param proxyUrl - The URL of the proxy endpoint that will return the JWT.
     */
    constructor(proxyUrl: string);
    /**
     * Authenticate a user with the Raygun API.
     * @returns JWT Token if successful, otherwise null.
     */
    authenticate(): Promise<string | undefined>;
}
