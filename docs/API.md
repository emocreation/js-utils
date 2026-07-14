**@emohk/utils**

***

# @emohk/utils

## Functions

### checkObject()

> **checkObject**(`object`): `object is Record<string, any>`

Checks if a value is an object (not null, not array).

#### Parameters

##### object

`any`

The value to check

#### Returns

`object is Record<string, any>`

True if the value is an object, false otherwise

#### Example

```ts
checkObject({}) // true
checkObject([]) // false
checkObject(null) // false
checkObject(undefined) // false
```

***

### checkStringPresent()

> **checkStringPresent**(`value`): `value is string`

Checks if a value is a non-empty string after trimming whitespace.

#### Parameters

##### value

`any`

The value to check

#### Returns

`value is string`

True if the value is a string with content after trimming, false otherwise

#### Example

```ts
checkStringPresent('hello world') // true
checkStringPresent('') // false
checkStringPresent(' ') // false
checkStringPresent(null) // false
checkStringPresent(undefined) // false
```

***

### chunk()

> **chunk**(`arr`, `size`): `any`[][]

Splits an array into smaller chunks of a specified size.

#### Parameters

##### arr

`any`[]

The array to split into chunks

##### size

`number`

The size of each chunk

#### Returns

`any`[][]

An array of arrays, where each sub-array contains at most 'size' elements from the original array

#### Example

```ts
chunk([1, 2, 3, 4, 5, 6], 2) // [[1, 2], [3, 4], [5, 6]]
chunk([1, 2, 3, 4, 5, 6], 3) // [[1, 2, 3], [4, 5, 6]]
chunk([1, 2, 3, 4, 5, 6], 4) // [[1, 2, 3, 4], [5, 6]]
```

***

### hasValues()

> **hasValues**(`raw`): `raw is any[]`

Checks if a value is a non-empty array.

#### Parameters

##### raw

`any`

The value to check

#### Returns

`raw is any[]`

True if the value is an array with at least one element, false otherwise

#### Example

```ts
hasValues([1, 2, 3]) // true
hasValues([]) // false
hasValues({}) // false
hasValues('') // false
hasValues(' ') // false
hasValues(0) // false
hasValues(null) // false
hasValues(undefined) // false
```
