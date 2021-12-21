/** @format **/
export declare type IUsers = {
    identifier: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
};
export declare type IApplications = {
    identifier: string;
    planIdentifier: string;
    name: string;
    apiKey: string;
    deploymentTrackingSetup: boolean;
    users: IUsers[];
};
