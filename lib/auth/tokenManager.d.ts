import { IAuthStrategy } from ".";
export declare class TokenManager {
    private authStrategy;
    private token;
    private decodedToken;
    private saveToBrowserStorage;
    private tokenStorageKey;
    constructor(authStrategy: IAuthStrategy, saveTokenInBrowser?: boolean);
    authenticate(): Promise<string | undefined>;
    refreshToken(): Promise<string | undefined>;
    getToken(): Promise<string | undefined>;
    removeToken(): void;
    private saveToken;
    private getTokenFromBrowserStorage;
    private isTokenExpired;
    private isTokenValid;
}
