/** @format */

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
