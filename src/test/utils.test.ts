import { dedupe, isRangeComplete, toSorted } from "../utils.js";

describe("utility tests", () => {
  test("dedupe should remove duplicate numbers from an array. Given an array of [1,2,2,3,4,5,5] it should return [1,2,3,4,5]", () => {
    expect(dedupe([1, 2, 2, 3, 4, 5, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("toSorted should return an array of sorted numbers. Given an array of [5,2,1,3,4] it should return [1,2,3,4,5]", () => {
    expect(toSorted([5, 2, 1, 3, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("isRangeComplete should return false when the min is 1, the max is 5, and the array is [2, 3, 4]", () => {
    expect(isRangeComplete([2, 3, 4], 1, 5)).toEqual(false);
  });
  test("isRangeComplete should return true when the min is 1, the max is 5, and the array is [1, 2, 3, 4, 5]", () => {
    expect(isRangeComplete([1, 2, 3, 4, 5], 1, 5)).toEqual(true);
  });
});
