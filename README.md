# Mustache Adapter

Use Mustache templates with [Fractal](http://frctl.github.io).

## Usage

Install via NPM:

```bash
npm i @frctl/mustache-adapter --save
```

Then add configuration details into your fractal.js file:

```js
const fractal = require('@frctl/fractal');

fractal.engine('mustache', '@frctl/mustache-adapter'); // register the mustache engine adapter

fractal.set('components.engine', 'mustache'); // use the mustache handler
fractal.set('components.ext', '.mustache'); // look for files with a .mustache file extension
```
