import type { CronField, FieldName, UnitConfig } from "./types.js";
import { units } from "./units.js";
import { valueIsCronIncrement, valueIsCronRange } from "./utils.js";

function getValidationError(fieldName: FieldName, message: string) {
  return new Error(`Failed to validate ${fieldName} field: ${message}`);
}

function validateValueIsWithinBounds(
  fieldName: FieldName,
  value: number,
  unitConfig: UnitConfig,
) {
  if (value < unitConfig.min || value > unitConfig.max) {
    throw getValidationError(
      fieldName,
      `Value "${value}" is outside of the bounds of "${unitConfig.min}-${unitConfig.max}"`,
    );
  }
}

export function validateField(fieldName: FieldName, value: CronField) {
  const unitConfig = units.get(fieldName);

  if (!unitConfig) {
    throw getValidationError(fieldName, "Missing unit config");
  }

  if (typeof value === "undefined" || value === null) {
    throw getValidationError(
      fieldName,
      `Unsupported value, received "${value}"`,
    );
  }

  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    Number.isFinite(value)
  ) {
    if (value < unitConfig.min || value > unitConfig.max) {
      throw getValidationError(
        fieldName,
        `Value ${value} is outside of the bounds of ${unitConfig.min}-${unitConfig.max}`,
      );
    }
    return;
  }

  if (Array.isArray(value)) {
    for (const num of value) {
      validateValueIsWithinBounds(fieldName, num, unitConfig);
    }
    return;
  }

  if (
    Object.prototype.hasOwnProperty.call(value, "startingAt") &&
    !Object.prototype.hasOwnProperty.call(value, "every")
  ) {
    throw getValidationError(
      fieldName,
      'Received "startingAt" property without "every" for incremental field',
    );
  }

  if (valueIsCronIncrement(value)) {
    if (typeof value.startingAt !== "undefined") {
      validateValueIsWithinBounds(fieldName, value.startingAt, unitConfig);
    }
    validateValueIsWithinBounds(fieldName, value.every, unitConfig);
    return;
  }

  if (valueIsCronRange(value)) {
  }

  throw getValidationError(
    fieldName,
    `Unsupported value, received "${JSON.stringify(value)}"`,
  );
}
