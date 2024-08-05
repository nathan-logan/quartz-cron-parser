import type {
  CronField,
  CronIncrement,
  CronRange,
  FieldsInput,
  UnitConfig,
} from "./types.js";
import {
  dedupe,
  getUnit,
  isRangeComplete,
  toSorted,
  valueIsCronIncrement,
  valueIsCronRange,
} from "./utils.js";

const getIncrementExpression = (value: CronIncrement) => {
  if (value.startingAt) {
    return `${value.startingAt}/${value.every}`;
  }

  return `0/${value.every}`;
};

const getRangeExpression = (value: CronRange) => {
  return `${value.start}-${value.end}`;
};

const getExpressionFromNumberArray = (
  unitConfig: UnitConfig,
  value: number[],
) => {
  const { min, max } = unitConfig;

  // sort and remove duplicates from the array so we have a clean slate
  const cleanArray = toSorted(dedupe(value));

  if (isRangeComplete(cleanArray, min, max)) {
    return "*";
  }
};

const getFieldExpression = (unitConfig: UnitConfig, value: CronField) => {
  if (valueIsCronRange(value)) {
    return getRangeExpression(value);
  }

  if (valueIsCronIncrement(value)) {
    return getIncrementExpression(value);
  }

  if (typeof value === "number") return String(value);

  return getExpressionFromNumberArray(unitConfig, value);
};

export const getCronExpressionFromFields = (fields: FieldsInput) => {
  const seconds = getFieldExpression(getUnit("seconds"), fields.seconds);
  const minutes = getFieldExpression(getUnit("minutes"), fields.minutes);
  const hours = getFieldExpression(getUnit("hours"), fields.hours);
  const dayOfMonth = getFieldExpression(
    getUnit("dayOfMonth"),
    fields.dayOfMonth,
  );
  const months = getFieldExpression(getUnit("months"), fields.months);
  const dayOfWeek = getFieldExpression(getUnit("dayOfWeek"), fields.dayOfWeek);
  const year = getFieldExpression(getUnit("year"), fields.year);

  return `${seconds} ${minutes} ${hours} ${dayOfMonth} ${months} ${dayOfWeek} ${year}`;
};
