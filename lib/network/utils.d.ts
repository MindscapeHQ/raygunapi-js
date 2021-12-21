/** @format */
import { JwtToken } from "../auth/models";
import { IQueryParams } from "./models";
/**
 * Adds general headers to a RequestInit object.
 * @param options request options to be extended
 * @param jwtToken a valid JWT token
 * @returns a RequestInit object with added headers
 */
export declare function addHTTPHeaders(options: RequestInit, jwtToken: string): RequestInit;
/**
 * Returns a url pointing to the public API built with given url segments.
 * @param path - url segments to be used to form the request url.
 * @returns - url generated from api base url and path segments.
 */
export declare function buildApiUrl(path: string | string[]): string;
/**
 * Returns a url with query parameters attached to it.
 * @param url - base url to be used to form the request url.
 * @param params - query string parameters to be added
 * @returns url generated from base url and query string parameters.
 */
export declare function addQueryStringParams(url: string, params: IQueryParams): string;
/**
 * When the given method errors, log the error based on the client config or return null.
 * @param method - function to wrap with a try catch
 * @returns Result of the passed function.
 */
export declare function wrapWithErrorHandler<T>(method: () => T): Promise<T | undefined>;
/**
 * Decode a given JWT token to get it's encoded data.
 * @param token JWT token to be decoded
 * @returns an object containing the decoded data from the JWT token
 */
export declare function decodeJwt(token: string): JwtToken;
