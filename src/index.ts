import type { Fields } from "./types.js";
import { validateFields } from "./validate.js";

export function fieldsToExpression(fields: Fields): string | undefined {
  // validate the inputs
  validateFields(fields);

  // convert the fields to a cron expression

  return "* * * * * *";
}
