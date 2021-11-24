/** @format */
import { isEmpty } from "lodash";

import * as Models from "./models";
import { addHTTPHeaders, addQueryStringParams, buildApiUrl } from "./utils";

async function executeRequest(method: Models.HTTPMethods, url: string, queryStringParameters: Models.IQueryParams = {}, options: RequestInit = {}, payload?: any): Promise<any> {
  const _options = { method, ...options };

  if (payload) {
    _options.body = JSON.stringify(payload);
  }

  if (!isEmpty(queryStringParameters)) {
    url = addQueryStringParams(url, queryStringParameters);
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
async function get<T>(url: string, queryStringParameters: Models.IQueryParams = {}, options: RequestInit = {}): Promise<T> {
  return await executeRequest(Models.HTTPMethods.GET, url, queryStringParameters, options);
}

/**
 * Performs a POST request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function post<T>(url: string, payload: any, queryStringParameters: Models.IQueryParams = {}, options: RequestInit = {}): Promise<T> {
  return await executeRequest(Models.HTTPMethods.POST, url, queryStringParameters, options, payload);
}

/**
 * Performs a PUT request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function put<T>(url: string, payload: any, queryStringParameters: Models.IQueryParams = {}, options: RequestInit = {}): Promise<T> {
  return await executeRequest(Models.HTTPMethods.PUT, url, queryStringParameters, options, payload);
}

/**
 * Performs a DELETE request to the specified url
 * @param url - target url to send request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function deleteFromApi<T>(url: string, payload: any, queryStringParameters: Models.IQueryParams = {}, options: any = {}): Promise<T> {
  return await executeRequest(Models.HTTPMethods.DELETE, url, queryStringParameters, options, payload);
}

const Network = {
  get,
  post,
  put,
  delete: deleteFromApi,
  buildApiUrl,
};

export default Network;
export * as Models from "./models";
