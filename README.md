# Mustache Adapter

Use Mustache templates with [Fractal](http://github.com/frctl/fractal).

## Usage

Install via NPM:

```bash
npm i @frctl/mustache --save
```

Then configure your Fractal instance:

```js
fractal.components.engine('@frctl/mustache'); // register the mustache engine adapter for your components
fractal.components.set('ext', '.mustache'); // look for files with a .mustache file extension
```
