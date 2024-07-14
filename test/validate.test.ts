import type { UnitConfig } from "../src/types.js";
import { units } from "../src/units.js";
import { validateField } from "../src/validate.js";

describe("validateField method", () => {
  describe("seconds unit", () => {
    test("should throw an error for the value 60 being out of the range of 0-59 for the seconds field", () => {
      expect(() =>
        validateField([1, 2, 60], units.get("seconds") as UnitConfig),
      ).toThrow("Out of range");
    });
  });
  describe("minutes unit", () => {
    test("should throw an error for the value 500 being out of the range of 0-59 for the minutes field", () => {
      expect(() =>
        validateField([500], units.get("minutes") as UnitConfig),
      ).toThrow("Out of range");
    });
  });
});
