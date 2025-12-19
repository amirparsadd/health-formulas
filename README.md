# health-formulas

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A library of popular health formulas, WIP

## Install

```bash
npm install health-formulas
```

## Example

```ts
import { calculateBMI } from 'health-formulas';

calculateBMI(70, 1.8);
//=> 21.6 ...
```

## Features

- BMI
- BMR
- TDEE
- Daily Calories & Macros
- Body Fat Percentage
- Lean Body Mass (LBM)
- Waist-to-Height Ratio (WHtR)
- Hydration
- Total Body Water (TBW)
- VO₂ Max

[build-img]: https://github.com/amirparsadd/health-formulas/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/amirparsadd/health-formulas/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/health-formulas
[downloads-url]: https://www.npmtrends.com/health-formulas
[npm-img]: https://img.shields.io/npm/v/health-formulas
[npm-url]: https://www.npmjs.com/package/health-formulas
[issues-img]: https://img.shields.io/github/issues/amirparsadd/health-formulas
[issues-url]: https://github.com/amirparsadd/health-formulas/issues
[codecov-img]: https://codecov.io/gh/amirparsadd/health-formulas/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/amirparsadd/health-formulas
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
