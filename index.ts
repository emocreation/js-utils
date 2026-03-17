/**
 * Checks if a value is a non-empty string after trimming whitespace.
 * @param value - The value to check
 * @returns True if the value is a string with content after trimming, false otherwise
 * @example
 * ```ts
 * checkStringPresent('hello world') // true
 * checkStringPresent('') // false
 * checkStringPresent(' ') // false
 * checkStringPresent(null) // false
 * checkStringPresent(undefined) // false
 * ```
 */
export const checkStringPresent = (value: any): value is string =>
  typeof value === 'string' && value.trim().length > 0
/**
 * Checks if a value is an object (not null, not array).
 * @param object - The value to check
 * @returns True if the value is an object, false otherwise
 * @example
 * ```ts
 * checkObject({}) // true
 * checkObject([]) // false
 * checkObject(null) // false
 * checkObject(undefined) // false
 * ```
 */
export const checkObject = (object: any): object is Record<string, any> =>
  typeof object === 'object' && object !== null && !Array.isArray(object)
/**
 * Checks if a value is a non-empty array.
 * @param raw - The value to check
 * @returns True if the value is an array with at least one element, false otherwise
 * @example
 * ```ts
 * hasValues([1, 2, 3]) // true
 * hasValues([]) // false
 * hasValues({}) // false
 * hasValues('') // false
 * hasValues(' ') // false
 * hasValues(0) // false
 * hasValues(null) // false
 * hasValues(undefined) // false
 * ```
 */
export const hasValues = (raw: any): raw is any[] =>
  Array.isArray(raw) && raw.length > 0
/**
 * Splits an array into smaller chunks of a specified size.
 * @param arr - The array to split into chunks
 * @param size - The size of each chunk
 * @returns An array of arrays, where each sub-array contains at most 'size' elements from the original array
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5, 6], 2) // [[1, 2], [3, 4], [5, 6]]
 * chunk([1, 2, 3, 4, 5, 6], 3) // [[1, 2, 3], [4, 5, 6]]
 * chunk([1, 2, 3, 4, 5, 6], 4) // [[1, 2, 3, 4], [5, 6]]
 * ```
 */
export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
