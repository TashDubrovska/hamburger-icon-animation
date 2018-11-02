![Node version](https://img.shields.io/badge/node-v10.13.0-blue.svg)
![NPM version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![CSS Postprocessor: SASS](https://img.shields.io/badge/CSS%20postprocessor-SASS-green.svg)

# Pure CSS hamburger icon animation
This repository contains code necessary to transform hamburger icon into a closing icon upon activation. Animation is done with pure CSS and is GPU accelerated for improved performance.

- [Running preview](#running-preview)
- [Developing](#developing)

## Running preview
1. Bundle front-end code by running:
```
npm run bundle
```
2. Open `/src/index.html` to preview the icon.
3. Linting for both JS and SASS can be run by executing the following:
```
npm run lint
```

## Developing
To develop simply run
```
npm run dev
```
this build will start a watcher which will wait for changes made to client-side `.scss` or `.js` files and do steps highlighted above automatically.
