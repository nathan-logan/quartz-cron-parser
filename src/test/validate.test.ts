import type { CronField } from "../types.js";
import { validateField } from "../validate.js";

describe("validation tests", () => {
  test("validateField should throw an error when passing an invalid value of [0,5,6,75]", () => {
    expect(() => validateField("seconds", [0, 5, 6, 75])).toThrow(
      'Value "75" is outside of the bounds',
    );
  });
  test("validateField should throw an error when passing an invalid incremental value of { every: 61 }", () => {
    expect(() => validateField("seconds", { every: 61 })).toThrow(
      'Value "61" is outside of the bounds',
    );
  });
  test("validateField should throw an error when the value passed is null", () => {
    expect(() =>
      validateField("seconds", null as unknown as CronField),
    ).toThrow('Unsupported value, received "null"');
  });
  test("validateField should throw an error when the value passed is undefined", () => {
    expect(() =>
      validateField("seconds", undefined as unknown as CronField),
    ).toThrow('Unsupported value, received "undefined"');
  });
  test("validateField should throw an error when the value passed is a random object", () => {
    expect(() =>
      validateField("seconds", {
        foo: 1,
        bar: false,
        baz: "string",
      } as unknown as CronField),
    ).toThrow("Unsupported value");
  });
});
