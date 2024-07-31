import type { FieldName, UnitConfig } from "./types.js";

export const units: ReadonlyMap<FieldName, UnitConfig> = new Map([
  [
    "seconds",
    {
      min: 0,
      max: 59,
    },
  ],
  ["minutes", { min: 0, max: 59 }],
  ["hours", { min: 0, max: 23 }],
  ["dayOfMonth", { min: 1, max: 31 }],
  ["months", { min: 1, max: 12 }],
  ["dayOfWeek", { min: 1, max: 7 }],
]);
