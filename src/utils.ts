/**
 * Returns a copy of the array with the numbers sorted
 */
export function sort(array: number[]) {
  return [...array].sort((a, b) => a - b);
}

/**
 * Removes duplicate numbers from the provided array
 */
export function dedupe(array: number[]) {
  return Array.from(new Set(array));
}
