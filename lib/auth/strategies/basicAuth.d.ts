/** @format */
import { IAuthStrategy } from "../models";
/**
 * Retrieves a JWT token from the Raygun API using basic authentication.
 * @class ProxyAuthStrategy
 * @implements IAuthStrategy
 */
export declare class BasicAuthStrategy implements IAuthStrategy {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    /**
     * Constructor
     * @param clientId - Identifier of the requesting client.
     * @param clientSecret - Secret of the requesting client.
     */
    constructor(clientId: string, clientSecret: string);
    /**
     * Authenticate a user with the Raygun API.
     * @returns JWT Token if successful, otherwise null.
     */
    authenticate(): Promise<string | undefined>;
}
