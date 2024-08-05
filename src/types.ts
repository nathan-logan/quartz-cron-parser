export const FIELD_NAMES = [
  "seconds",
  "minutes",
  "hours",
  "dayOfMonth",
  "months",
  "dayOfWeek",
  "year",
] as const;
export type FieldName = (typeof FIELD_NAMES)[number];

export type CronField = number | number[] | CronRange | CronIncrement;

export type CronRange = {
  start: number;
  end: number;
};

export type CronIncrement = {
  every: number;
  /**
   * The value to start the increment from.
   *
   * @example For the seconds field, setting `every` to 5, and `startingAt` to
   * 10, will produce 10/5 which runs the schedule every 5th second, starting
   * from the 10th second.
   *
   * @default 0
   */
  startingAt?: number;
};

export type UnitConfig = {
  min: number;
  max: number;
};

export type FieldsInput = Record<FieldName, CronField>;
