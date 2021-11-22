/** @format */

import { HTTPMethods } from "./models";
import { addHTTPHeaders, buildApiUrl } from "./utils";

async function executeRequest(method: HTTPMethods, url: string, options: RequestInit = {}, payload?: any): Promise<any> {
  const _options = { method, ...options };

  if (payload) {
    _options.body = JSON.stringify(payload);
  }

  const res = await fetch(url, addHTTPHeaders(_options));
  return await res.json();
}

/**
 * Performs a GET request to the specified url
 * @param url - target url to send request
 * @param options - optional options to pass to fetch
 * @returns The response returned for the request.
 */
async function get<T>(url: string, options: RequestInit = {}): Promise<T> {
  return await executeRequest(HTTPMethods.GET, url, options);
}

/**
 * Performs a POST request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function post<T>(url: string, payload: any, options: RequestInit = {}): Promise<T> {
  return await executeRequest(HTTPMethods.POST, url, options, payload);
}

/**
 * Performs a PUT request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function put<T>(url: string, payload: any, options: RequestInit = {}): Promise<T> {
  return await executeRequest(HTTPMethods.PUT, url, options, payload);
}

/**
 * Performs a DELETE request to the specified url
 * @param url - target url to send request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function deleteFromApi<T>(url: string, payload: any, options: any = {}): Promise<T> {
  return await executeRequest(HTTPMethods.DELETE, url, options, payload);
}

const Network = {
  get,
  post,
  put,
  delete: deleteFromApi,
  buildApiUrl,
};

export default Network;
