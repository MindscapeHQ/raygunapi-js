/** @format */
import { TokenManager } from "../auth";
import * as Models from "./models";
import { addHTTPHeaders, addQueryStringParams, buildApiUrl } from "./utils";

class NetworkClient {
  private tokenManager: TokenManager;

  constructor(tokenManager: TokenManager) {
    this.tokenManager = tokenManager;
  }

  /**
   * Performs a GET request to the specified url
   * @param url - target url to send request
   * @param options - optional options to pass to fetch
   * @returns The response returned for the request.
   */
  public async get<T>(url: string, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(Models.HTTPMethods.GET, url, queryStringParameters, options);
  }

  /**
   * Performs a POST request to the specified url
   * @param url - target url to send request
   * @param payload - payload to send with the request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async post<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(Models.HTTPMethods.POST, url, queryStringParameters, options, payload);
  }

  /**
   * Performs a PUT request to the specified url
   * @param url - target url to send request
   * @param payload - payload to send with the request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async put<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(Models.HTTPMethods.PUT, url, queryStringParameters, options, payload);
  }

  /**
   * Performs a DELETE request to the specified url
   * @param url - target url to send request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async deleteFromApi<T>(url: string, payload: any, queryStringParameters?: Models.IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(Models.HTTPMethods.DELETE, url, queryStringParameters, options, payload);
  }

  private async executeRequest<T>(method: Models.HTTPMethods, url: string, queryStringParameters?: Models.IQueryParams, options?: RequestInit, payload?: any): Promise<T> {
    const jwtToken = (await this.tokenManager.getToken()) || "";
    var _options = addHTTPHeaders({ method }, jwtToken);

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
}

export { NetworkClient, buildApiUrl };
export * as Models from "./models";
