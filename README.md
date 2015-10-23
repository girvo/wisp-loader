# wisp loader for webpack
Allows for compilation and requiring of [wisp](https://github.com/Gozala/wisp) files via webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Install the loader for your project

```sh
npm install -D wisp-loader
```

Require a wisp file in your Javascript code.

```javascript
var ex = require('./example.wisp');
```

### Example webpack config

```javascript
module.exports = {
    entry: './src/index.wisp',
    
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    
    module: {
        loaders: [
            {
                test: /\.wisp$/,
                loader: 'wisp-loader'
            }
        ]
    },
};
```

## Caveats

This loader munges the `require()` calls for **local** modules to force their paths to end in `.wisp`. This is done so that the `:require` calls in a wisp file will load the wisp counterpart. By default, wisp converts it to a regular Javascript `require()` call.

### Original behaviour

```clojure
; ./one.wisp
(:ns example.one
  "an entry point"
  (:require [example.two]))
```

```javascript
// compiled result

// ...

var example_two = require('./two');
```

### Loader behaviour

```javascript
// compiled result

// ...

var example_two = require('./two.wisp');
```

> ### WARNING: This means you cannot load local Javascript modules from within a wisp file!

# License

MIT
