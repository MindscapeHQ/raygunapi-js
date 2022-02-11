/** @format */
import { IAuthStrategy } from "../auth";
import { Alerts, Applications, Integrations } from "../entities";
export declare class ApiClient {
    private tokenManager;
    private networkClient;
    private alerts;
    private applications;
    private integrations;
    constructor(authStrategy: IAuthStrategy, persistToken: boolean);
    authenticate(): Promise<string | undefined>;
    refreshToken(): Promise<string | undefined>;
    getEntities(): {
        Alerts: Alerts;
        Applications: Applications;
        Integrations: Integrations;
    };
}
