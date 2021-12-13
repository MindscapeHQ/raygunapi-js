/** @format */
import { IAuthStrategy } from "./models";
import { BasicAuthStrategy, ProxyAuthStrategy } from "./strategies";
import { TokenManager } from "./tokenManager";

const AuthStrategies = {
  BasicAuthStrategy,
  ProxyAuthStrategy,
};

export { TokenManager, IAuthStrategy, AuthStrategies };
