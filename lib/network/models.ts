/** @format */
export enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type IQueryParams = {
  [key: string]: string | number | boolean;
};
