/** @format */

export interface IAuthStrategy {
  authenticate: () => string;
}
