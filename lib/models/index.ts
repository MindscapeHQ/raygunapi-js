/** @format */

import * as Entities from "../entities";
import * as Models from ".";

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

/**
 * The Raygun API client object
 */
export type IRaygunClient = {
  authenticate: () => Promise<string | undefined>;
  refreshToken: () => Promise<string | undefined>;
  Alerts: Entities.Alerts;
  Models: typeof Models;
};
