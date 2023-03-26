# @vsconfig/eslint-config

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![prettier][prettier-image]][prettier-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/@vsconfig/eslint-config/latest.svg
[npm-url]: https://www.npmjs.com/package/@vsconfig/eslint-config
[downloads-image]: https://img.shields.io/npm/dm/@vsconfig/eslint-config
[downloads-url]: https://npmjs.org/package/@vsconfig/eslint-config
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://prettier.io/
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

## Installation

1. Install the dependencies.

**npm:**

```bash
npm i -D eslint @vsconfig/eslint-config
```

**yarn:**

```bash
yarn add -D eslint @vsconfig/eslint-config
```

2. Create a `.eslintrc.*` file.

**JSON:**
```json
{
  "extends": ["@vsconfig/eslint-config"]
}
```

**JS:**
```js
module.exports = {
  extends: ["@vsconfig/eslint-config"]
}
```
