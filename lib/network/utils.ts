/** @format */

import { GlobalConfig } from "../config";
import { IQueryParams } from "./models";

/**
 * Adds general headers to a RequestInit object.
 * @param options request options to be extended
 * @param jwtToken a valid JWT token
 * @returns a RequestInit object with added headers
 */
export function addHTTPHeaders(options: RequestInit, jwtToken: string): RequestInit {
  return {
    headers: {
      Accept: "application/json, text/plain, */*;",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    mode: "cors",
    ...options,
  };
}

/**
 * Returns a url pointing to the public API built with given url segments.
 * @param path - url segments to be used to form the request url.
 * @returns - url generated from api base url and path segments.
 */
export function buildApiUrl(path: string | string[]): string {
  const baseUrl = GlobalConfig.apiUrl;
  const isString = typeof path === "string";
  return `${baseUrl}/${isString ? path : path.join("/")}`;
}

/**
 * Returns a url with query parameters attached to it.
 * @param url - base url to be used to form the request url.
 * @param params - query string parameters to be added
 * @returns url generated from base url and query string parameters.
 */
export function addQueryStringParams(url: string, params: IQueryParams): string {
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
  return `${url}?${queryString}`;
}

/**
 * When the given method errors, log the error based on the client config or return null.
 * @param method - function to wrap with a try catch
 * @returns Result of the passed function.
 */
export async function wrapWithErrorHandler<T>(method: () => T): Promise<T | undefined> {
  try {
    return await method();
  } catch (err) {
    if (GlobalConfig.logFunc) {
      GlobalConfig.logFunc(err);
    }

    return Promise.resolve(undefined);
  }
}
