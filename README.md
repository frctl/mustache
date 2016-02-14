# Mustache Engine

Use Mustache templates with [Fractal](http://frctl.github.io).

## Installation and Usage

Install via NPM:

```bash
npm i @frctl/mustache-engine --save
```

Then add configuration details into your fractal.js file:

```
const fractal = require('@frctl/fractal');

fractal.engine('mustache', '@frctl/mustache-engine'); // register the mustache engine

fractal.set('components.engine', 'mustache'); // use the mustache handler
fractal.set('components.ext', '.mustache'); // look for files with a .mustache file extension
```
