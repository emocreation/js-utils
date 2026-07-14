# @emohk/utils

The package contains a collection of utility functions that can be used in various projects.

## Installation

```bash
npm install @emohk/utils
```

## Usage

ESM

```ts
import { checkStringPresent, checkObject, hasValues, chunk } from '@emohk/utils'
```

CommonJS

```ts
const { checkStringPresent, checkObject, hasValues, chunk } = require('@emohk/utils')
```

Example

```ts
checkStringPresent('hello world') // true
checkObject({}) // true
hasValues([1, 2, 3]) // true
chunk([1, 2, 3, 4, 5, 6], 2) // [[1, 2], [3, 4], [5, 6]]
```

Go to the [API documentation](https://github.com/emocreation/js-utils/blob/main/docs/API.md) for more information.

## Development

To install dependencies:

```bash
bun install
```

To build:

```bash
bun run build
```

To generate typescript declarations:

```bash
bun run declare
```

To generate documentation:

```bash
bun run docs
```
