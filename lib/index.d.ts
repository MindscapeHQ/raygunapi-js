import { AuthStrategies, IAuthStrategy } from "./auth";
import { IRaygunClient } from "./models";
export * from "./entities/alerts/enums";
export declare type IClientOptions = {
    authStrategy: IAuthStrategy;
    userIdentifier: string;
    logFunc?: (message: any) => void;
    apiUrl?: string;
    persistToken?: boolean;
};
export declare function createClient({ authStrategy, userIdentifier, logFunc, apiUrl, persistToken }: IClientOptions): IRaygunClient;
export { AuthStrategies };
