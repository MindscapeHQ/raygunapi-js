/** @format */
import * as Models from "./models";
import { addHTTPHeaders, addQueryStringParams, buildApiUrl } from "./utils";

async function executeRequest(method: Models.HTTPMethods, url: string, queryStringParameters?: Models.IQueryParams, options?: RequestInit, payload?: any): Promise<any> {
  var _options = addHTTPHeaders({ method });

  if (options) {
    _options = { ..._options, ...options };
  }

  if (payload) {
    if (typeof payload !== "string") {
      payload = JSON.stringify(payload);
    }

    _options.body = payload;
  }

  if (queryStringParameters) {
    url = addQueryStringParams(url, queryStringParameters);
  }
  console.log("Req options", _options);

  const res = await fetch(url, _options);
  return await res.json();
}

/**
 * Performs a GET request to the specified url
 * @param url - target url to send request
 * @param options - optional options to pass to fetch
 * @returns The response returned for the request.
 */
async function get<T>(url: string, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
  return await executeRequest(Models.HTTPMethods.GET, url, queryStringParameters, options);
}

/**
 * Performs a POST request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function post<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
  return await executeRequest(Models.HTTPMethods.POST, url, queryStringParameters, options, payload);
}

/**
 * Performs a PUT request to the specified url
 * @param url - target url to send request
 * @param payload - payload to send with the request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function put<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
  return await executeRequest(Models.HTTPMethods.PUT, url, queryStringParameters, options, payload);
}

/**
 * Performs a DELETE request to the specified url
 * @param url - target url to send request
 * @param options - optional options to pass to fetch api
 * @returns The response returned for the request.
 */
async function deleteFromApi<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
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
