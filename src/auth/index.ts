/** @format */
import { IAuthStrategy } from "./models";
import * as AuthStrategies from "./strategies";

// TODO handle expired token detection

class TokenManager {
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

  async refreshToken() {
    return await this.authenticate();
  }

  getToken(): string | undefined {
    return this.token;
  }

  private saveToken(token: string) {
    this.token = token;
  }
}

const Auth = {};
export { Auth, TokenManager, IAuthStrategy, AuthStrategies };
