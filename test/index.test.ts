/** @format */

import { sum } from "../src";

describe("sum", () => {
  describe("Given 5 + 5", () => {
    it("returns 10", () => {
      const res = sum(5, 5);
      expect(res).toEqual(10);
    });
  });
});
