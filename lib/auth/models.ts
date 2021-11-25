/** @format */

export type TokenServerResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

export type AuthenticateResponse = {
  access_token: string;
  expires_in: string;
};

export type JwtToken = {
  nbf: number;
  exp: number;
  iss: string;
  client_id: string;
  raygun_planId: string;
  raygun_role: string;
  jti: string;
  iat: number;
};

export interface IAuthStrategy {
  /**
   * Authenticate a user with the Raygun API.
   * @returns JWT Token if successful, otherwise null.
   */
  authenticate: () => Promise<string | undefined>;
}

export enum GrantType {
  Client = "client_credentials",
}
