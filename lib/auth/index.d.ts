/** @format */
import { IAuthStrategy } from "./models";
import { BasicAuthStrategy, ProxyAuthStrategy } from "./strategies";
import { TokenManager } from "./tokenManager";
declare const AuthStrategies: {
    BasicAuthStrategy: typeof BasicAuthStrategy;
    ProxyAuthStrategy: typeof ProxyAuthStrategy;
};
export { TokenManager, IAuthStrategy, AuthStrategies };
