/** @format */

import { ApiClient } from "../api";
import { Alerts } from "../entities";
import * as Models from "../models";

type IPageLink = {
  href: string;
};

/**
 * Outlines the shape of paginatable data returned from the API
 */
export type IPagedEntity<T> = {
  entities: T[];
  links: {
    self: IPageLink;
    next: IPageLink | null;
    previous: IPageLink | null;
  };
  totalCount: number;
};

export type IRaygunApiClient = {
  apiClient: typeof ApiClient;
  Alerts: typeof Alerts;
  Models: typeof Models;
};
