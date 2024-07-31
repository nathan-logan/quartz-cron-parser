import { hello } from "../index.js";

describe("foo", () => {
  test("bar", () => {
    expect(hello("Nathan")).toEqual("Hello Nathan");
  });
});
