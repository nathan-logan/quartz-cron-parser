import type { UnitConfig } from "./types.js";
import { dedupe, sort } from "./utils.js";

/**
 * Given an array of numbers, this function should return a valid cron string or
 * throw an error if it fails to parse the provided array
 */
export function fieldArrayToCronStringPart(array: number[], unit: UnitConfig) {
  const values = prepareFieldArray(array);

  if (values.length === 0) {
    throw new Error(`Empty values for unit "${unit.name}"`);
  }
}

/**
 * This function will remove duplicates and sort the provided array so it is
 * ready to be convered to a cron string part
 */
export function prepareFieldArray(array: number[]) {
  return sort(dedupe(array));
}
