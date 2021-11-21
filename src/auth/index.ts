/** @format */
import { IAuthStrategy } from "./models";

class BasicAuthStrategy implements IAuthStrategy {
  authenticate() {
    return "test";
  }
}

const AuthStrategies = {
  BasicAuthStrategy,
};

export { IAuthStrategy, AuthStrategies };
