/** @format */

import jwtDecode from "jwt-decode";

import { JwtToken } from "./models";
import { IAuthStrategy } from ".";

export class TokenManager {
  private authStrategy: IAuthStrategy;
  private token: string | undefined;
  private saveToBrowserStorage: boolean;
  private tokenStorageKey: string = "x-raygnapi";

  constructor(authStrategy: IAuthStrategy, saveTokenInBrowser: boolean = true) {
    this.authStrategy = authStrategy;
    this.saveToBrowserStorage = saveTokenInBrowser;

    if (saveTokenInBrowser) {
      this.token = this.getTokenFromBrowserStorage();
    }
  }

  async authenticate(): Promise<string | undefined> {
    if (this.isTokenExpired() || !this.isTokenValid()) {
      const token = await this.authStrategy.authenticate();
      if (token) {
        this.saveToken(token);
        return token;
      }

      return undefined;
    }
  }

  async refreshToken(): Promise<string | undefined> {
    const token = await this.authStrategy.authenticate();
    if (token) {
      this.saveToken(token);
      return token;
    }

    return undefined;
  }

  async getToken(): Promise<string | undefined> {
    if (this.isTokenExpired() || !this.isTokenValid()) {
      return await this.refreshToken();
    }

    return this.token;
  }

  removeToken() {
    this.token = undefined;
    sessionStorage.removeItem(this.tokenStorageKey);
  }

  private saveToken(token: string) {
    this.token = token;

    if (this.saveToBrowserStorage && localStorage) {
      localStorage.setItem(this.tokenStorageKey, token);
    }
  }

  private getTokenFromBrowserStorage(): string | undefined {
    if (localStorage) {
      return localStorage.getItem(this.tokenStorageKey) || undefined;
    }
    return undefined;
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

  private isTokenValid(): boolean {
    if (!this.token) {
      return false;
    }

    try {
      const { raygun_planId, raygun_role } = jwtDecode<JwtToken>(this.token);
      if (raygun_planId && raygun_role) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }
}
