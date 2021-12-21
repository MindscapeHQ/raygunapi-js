/** @format */
declare type IGlobalConfig = {
    planIdentifier: string;
    userIdentifier: string;
    apiUrl: string;
    jwtToken: string;
    tokenExpiration?: number;
    logFunc?: (message: any) => void;
};
export declare const GlobalConfig: IGlobalConfig;
export {};
