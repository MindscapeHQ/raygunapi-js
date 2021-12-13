/** @format */
import { TokenManager } from "../auth";
import { IQueryParams, HTTPMethods } from "./models";
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
  public async get<T>(url: string, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(HTTPMethods.GET, url, queryStringParameters, options);
  }

  /**
   * Performs a POST request to the specified url
   * @param url - target url to send request
   * @param payload - payload to send with the request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async post<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(HTTPMethods.POST, url, queryStringParameters, options, payload);
  }

  /**
   * Performs a PUT request to the specified url
   * @param url - target url to send request
   * @param payload - payload to send with the request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async put<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(HTTPMethods.PUT, url, queryStringParameters, options, payload);
  }

  /**
   * Performs a DELETE request to the specified url
   * @param url - target url to send request
   * @param options - optional options to pass to fetch api
   * @returns The response returned for the request.
   */
  public async deleteFromApi<T>(url: string, payload: any, queryStringParameters?: IQueryParams, options?: RequestInit): Promise<T> {
    return await this.executeRequest(HTTPMethods.DELETE, url, queryStringParameters, options, payload);
  }

  private async executeRequest<T>(method: HTTPMethods, url: string, queryStringParameters?: IQueryParams, options?: RequestInit, payload?: any): Promise<T> {
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

    const res = await fetch(url, _options);
    return await res.json();
  }
}

export { NetworkClient, buildApiUrl, IQueryParams, HTTPMethods };
