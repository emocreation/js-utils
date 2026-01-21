import { expect, test } from 'bun:test'
import { checkStringPresent, checkObject, hasValues, chunk } from './index'

test('checkStringPresent', () => {
  // Valid strings with content
  expect(checkStringPresent('hello world')).toBe(true)
  expect(checkStringPresent('a')).toBe(true)
  expect(checkStringPresent('  hello  ')).toBe(true) // trims whitespace

  // Empty strings and whitespace-only strings
  expect(checkStringPresent('')).toBe(false)
  expect(checkStringPresent(' ')).toBe(false)
  expect(checkStringPresent('   ')).toBe(false)
  expect(checkStringPresent('\t')).toBe(false)
  expect(checkStringPresent('\n')).toBe(false)

  // Non-string values
  expect(checkStringPresent(null)).toBe(false)
  expect(checkStringPresent(undefined)).toBe(false)
  expect(checkStringPresent(42)).toBe(false)
  expect(checkStringPresent({})).toBe(false)
  expect(checkStringPresent([])).toBe(false)
  expect(checkStringPresent(true)).toBe(false)
  expect(checkStringPresent(false)).toBe(false)
})

test('checkObject', () => {
  // Valid plain objects
  expect(checkObject({})).toBe(true)
  expect(checkObject({ key: 'value' })).toBe(true)
  expect(checkObject({ nested: { object: true } })).toBe(true)

  // Invalid values
  expect(checkObject([])).toBe(false)
  expect(checkObject(null)).toBe(false)
  expect(checkObject(undefined)).toBe(false)
  expect(checkObject('string')).toBe(false)
  expect(checkObject(42)).toBe(false)
  expect(checkObject(true)).toBe(false)
  expect(checkObject(new Date())).toBe(false) // Date is an object but not plain
  expect(checkObject(() => {})).toBe(false) // Function is an object but not plain
})

test('hasValues', () => {
  // Valid non-empty arrays
  expect(hasValues([1, 2, 3])).toBe(true)
  expect(hasValues(['a', 'b'])).toBe(true)
  expect(hasValues([{}])).toBe(true)
  expect(hasValues([null])).toBe(true)
  expect(hasValues([undefined])).toBe(true)

  // Empty arrays
  expect(hasValues([])).toBe(false)

  // Non-array values
  expect(hasValues({})).toBe(false)
  expect(hasValues('')).toBe(false)
  expect(hasValues(' ')).toBe(false)
  expect(hasValues(0)).toBe(false)
  expect(hasValues(null)).toBe(false)
  expect(hasValues(undefined)).toBe(false)
  expect(hasValues(true)).toBe(false)
  expect(hasValues(false)).toBe(false)
})

test('chunk', () => {
  // Basic functionality
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]])
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]])
  expect(chunk([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]])

  // Edge cases
  expect(chunk([], 2)).toEqual([])
  expect(chunk([1], 2)).toEqual([[1]])
  expect(chunk([1, 2], 2)).toEqual([[1, 2]])
  expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])

  // Different data types
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  expect(chunk([{}, {}, {}], 2)).toEqual([[{}, {}], [{}]])

  // Chunk size larger than array length
  expect(chunk([1, 2], 5)).toEqual([[1, 2]])

  // Chunk size of 1
  expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]])
})

