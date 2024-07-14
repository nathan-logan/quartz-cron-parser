import type { FieldName, Fields, UnitConfig } from "./types.js";
import { units } from "./units.js";

export function validateField(values: number[], unit: UnitConfig) {
  if (!Array.isArray(values)) {
    throw new Error(`Values for unit ${unit.name} is not an array`);
  }

  values.forEach((value) => {
    if (value > unit.max || value < unit.min) {
      throw new Error(
        `Out of range (value ${value} is outside of the range of ${unit.min}-${unit.max} for the ${unit.name} field)`,
      );
    }
  });
}

export function validateFields(fields: Fields) {
  Object.entries(fields).forEach(([key, values]) => {
    const unit = units.get(key as FieldName);

    if (!unit) {
      throw new Error(`Field "${key}" is not configured as a unit`);
    }

    validateField(values, unit);
  });
}
