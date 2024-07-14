import { dedupe, sort } from "../src/utils.js";

describe("utility methods", () => {
  describe("sort", () => {
    test("should sort the array", () => {
      expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
    });
  });
  describe("dedupe", () => {
    test("should remove duplicate numbers from the array", () => {
      expect(dedupe([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });
  });
});
