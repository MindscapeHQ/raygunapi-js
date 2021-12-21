/** @format */
import { IAuthStrategy } from "../auth";
import { Alerts, Applications, Plans } from "../entities";
export declare class ApiClient {
    private tokenManager;
    private networkClient;
    private alerts;
    private applications;
    private plans;
    constructor(authStrategy: IAuthStrategy, persistToken: boolean);
    authenticate(): Promise<string | undefined>;
    refreshToken(): Promise<string | undefined>;
    getEntities(): {
        Alerts: Alerts;
        Applications: Applications;
        Plans: Plans;
    };
}
