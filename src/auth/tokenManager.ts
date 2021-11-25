/** @format */

import jwtDecode from "jwt-decode";

import { JwtToken } from "./models";
import { IAuthStrategy } from ".";

export class TokenManager {
  private authStrategy: IAuthStrategy;
  private token: string | undefined;

  constructor(authStrategy: IAuthStrategy) {
    this.authStrategy = authStrategy;
  }

  async authenticate(): Promise<string | undefined> {
    const token = await this.authStrategy.authenticate();
    if (token) {
      this.saveToken(token);
      return token;
    }

    return undefined;
  }

  async refreshToken(): Promise<string | undefined> {
    return await this.authenticate();
  }

  async getToken(): Promise<string | undefined> {
    if (this.isTokenExpired()) {
      return await this.refreshToken();
    }

    return this.token;
  }

  private saveToken(token: string) {
    this.token = token;
  }

  private isTokenExpired(): boolean {
    if (!this.token) {
      return true;
    }

    try {
      const decodedToken = jwtDecode<JwtToken>(this.token);
      const expiryTime = decodedToken.exp;
      const now = new Date().getTime() / 1000;
      return now >= expiryTime;
    } catch (error) {
      return true;
    }
  }

  // TODO add token validation i.e ensure that the decoded token has a valid userIdentifier etc.
}
