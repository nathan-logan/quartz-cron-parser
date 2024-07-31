import type { CronField, CronRange, CronIncrement } from "./types.js";

/**
 * Given a cron field value, this function will assert if the value is a valid
 * range value or not
 */
export function valueIsCronRange(value: CronField): value is CronRange {
  if (typeof value !== "object" || value === null) return false;
  if (
    Object.prototype.hasOwnProperty.call(value, "start") &&
    Object.prototype.hasOwnProperty.call(value, "end")
  ) {
    return true;
  }
  return false;
}

/**
 * Given a cron field value, this function will assert if the value is a valid
 * increment value or not
 */
export function valueIsCronIncrement(value: CronField): value is CronIncrement {
  if (typeof value !== "object" || value === null) return false;
  if (Object.prototype.hasOwnProperty.call(value, "every")) {
    return true;
  }
  return false;
}

/**
 * Given an array of numbers this function will return a copy of the array with
 * the values sorted from smallest to largest
 */
export function toSorted(array: number[]) {
  return [...array].sort((a, b) => a - b);
}

/**
 * Given an array of numbers this function will return a copy of the array with
 * the duplicated numbers removed
 */
export function dedupe(array: number[]) {
  return Array.from(new Set(array));
}
