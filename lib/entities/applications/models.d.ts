/** @format */
export declare type IUser = {
    indentifier: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
};
export declare type IApplication = {
    identifier: string;
    planIdentifier: string;
    name: string;
    apiKey: string;
    users: IUser[];
};
