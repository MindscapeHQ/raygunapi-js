/** @format */

import { GlobalConfig } from "../config";

/**
 * Adds general headers to a RequestInit object.
 * @param options request options to be extended
 * @returns a RequestInit object with added headers
 */
export function addHTTPHeaders(options: RequestInit): RequestInit {
  return {
    headers: {
      Accept: "application/json, text/plain, */*;",
      "Content-Type": "application/json",
      Authorization: `Bearer ${GlobalConfig.jwtToken}`,
    },
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