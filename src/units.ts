import type { Fields, UnitConfig } from "./types.js";

export const units: ReadonlyMap<keyof Fields, UnitConfig> = new Map([
  [
    "seconds",
    {
      name: "seconds",
      min: 0,
      max: 59,
    },
  ],
  ["minutes", { name: "minutes", min: 0, max: 59 }],
  ["hours", { name: "hours", min: 0, max: 23 }],
  ["daysOfMonth", { name: "daysOfMonth", min: 1, max: 31 }],
  ["months", { name: "months", min: 1, max: 12 }],
  ["daysOfWeek", { name: "daysOfWeek", min: 1, max: 7 }],
]);
