/** @format */
import { TokenManager } from "../auth";
import { IQueryParams, HTTPMethods } from "./models";
import { buildApiUrl } from "./utils";
declare class NetworkClient {
    private tokenManager;
    constructor(tokenManager: TokenManager);
    /**
     * Performs a GET request to the specified url
     * @param url - target url to send request
     * @param options - optional options to pass to fetch
     * @returns The response returned for the request.
     */
    get<T>(url: string, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T>;
    /**
     * Performs a POST request to the specified url
     * @param url - target url to send request
     * @param payload - payload to send with the request
     * @param options - optional options to pass to fetch api
     * @returns The response returned for the request.
     */
    post<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T>;
    /**
     * Performs a PUT request to the specified url
     * @param url - target url to send request
     * @param payload - payload to send with the request
     * @param options - optional options to pass to fetch api
     * @returns The response returned for the request.
     */
    put<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T>;
    /**
     * Performs a DELETE request to the specified url
     * @param url - target url to send request
     * @param options - optional options to pass to fetch api
     * @returns The response returned for the request.
     */
    deleteFromApi<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T>;
    private executeRequest;
}
export { NetworkClient, buildApiUrl, IQueryParams, HTTPMethods };
