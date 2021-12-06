/** @format */

type IGlobalConfig = {
  planIdentifier: string;
  userIdentifier: string;
  apiUrl: string;
  jwtToken: string;
  tokenExpiration?: number;
  logFunc?: (message: any) => void;
};

export const GlobalConfig: IGlobalConfig = {
  planIdentifier: "",
  userIdentifier: "",
  apiUrl: "",
  jwtToken: "",
  tokenExpiration: undefined,
  logFunc: undefined,
};
