/** @format **/

export type IUsers = {
  identifier: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export type IApplications = {
  identifier: string;
  planIdentifier: string;
  name: string;
  apiKey: string;
  deploymentTrackingSetup: boolean;
  users: IUsers[];
};