/** @format */
import { JwtToken } from "./models";
import { IAuthStrategy } from ".";
import { wrapWithErrorHandler, decodeJwt } from "../network/utils";

export class TokenManager {
  private authStrategy: IAuthStrategy;
  private token: string | undefined;
  private decodedToken: JwtToken | undefined;
  private saveToBrowserStorage: boolean;
  private tokenStorageKey: string = "x-raygunapi";

  constructor(authStrategy: IAuthStrategy, saveTokenInBrowser: boolean = true) {
    this.authStrategy = authStrategy;
    this.saveToBrowserStorage = saveTokenInBrowser;

    if (saveTokenInBrowser) {
      const token = this.getTokenFromBrowserStorage();
      if (token) {
        this.token = token;
        this.decodedToken = decodeJwt(token);
      }
    }
  }

  async authenticate(): Promise<string | undefined> {
    return await wrapWithErrorHandler(async () => {
      if (this.isTokenExpired() || !this.isTokenValid()) {
        const token = await this.authStrategy.authenticate();
        if (token) {
          this.saveToken(token);
          return token;
        }

        return undefined;
      }
    });
  }

  async refreshToken(): Promise<string | undefined> {
    return await wrapWithErrorHandler(async () => {
      const token = await this.authStrategy.authenticate();
      if (token) {
        this.saveToken(token);
        return token;
      }

      return undefined;
    });
  }

  async getToken(): Promise<string | undefined> {
    const isExpired = this.isTokenExpired();
    const isValid = this.isTokenValid();
    if (isExpired || !isValid) {
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
    this.decodedToken = decodeJwt(token);

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
    if (!this.token || !this.decodedToken) {
      return true;
    }

    try {
      const expiryTime = this.decodedToken.exp;
      const now = new Date().getTime() / 1000;
      return now >= expiryTime;
    } catch (error) {
      return true;
    }
  }

  private isTokenValid(): boolean {
    if (!this.token || !this.decodedToken) {
      return false;
    }

    const { raygun_role } = this.decodedToken;
    return !!raygun_role;
  }
}
