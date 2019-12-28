<h1 align="center">

<br>

<img src="./.github/banner.png" alt="Alys" width="128">

<br>
<br>

Alys

</h1>

<p align="center">A tiny React component library</p>

<p align="center">
  <a href="https://travis-ci.org/rmjordas/alys">
    <img src="https://travis-ci.org/rmjordas/alys.svg" alt="Travis CI">
  </a>

  <a href="https://www.npmjs.com/package/alys">
    <img src="https://img.shields.io/npm/v/alys.svg" alt="Alys on npm">
  </a>

  <a href="https://alys.js.org">
    <img src="https://img.shields.io/badge/docs-alys.js.org-blue.svg" alt="Documentation website">
  </a>
</p>

<hr />

## Peer Dependencies

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [@emotion/core](https://www.npmjs.com/package/@emotion/core)
- [emotion-theming](https://www.npmjs.com/package/emotion-theming)
- [prop-types](https://www.npmjs.com/package/prop-types)

## Install

### npm

```bash
npm install alys
```

### Yarn

```bash
yarn add alys
```

## Usage

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Button from 'alys/Button';

export default function MyComponent() {
  return (
    <Button
      css={css`
        display: inline-block;
      `}
    >
      Default button
    </Button>
  );
}
```

## Documentation

- [Component documentation](https://alys.js.org)
- [Change log](https://github.com/rmjordas/alys/blob/master/CHANGELOG.md)
- [Contributing guide](https://github.com/rmjordas/alys/blob/master/.github/CONTRIBUTING.md)
- [Attribution notice](https://github.com/rmjordas/alys/blob/master/NOTICE)

## License

Copyright 2017-2020 Rodger Jordas

This project is licensed under the terms of the Apache License, Version 2.0.
