/** @format */

export type IUser = {
  indentifier: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
};

export type IApplication = {
  identifier: string;
  planIdentifier: string;
  name: string;
  apiKey: string;
  users: IUser[];
};
