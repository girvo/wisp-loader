# wisp loader for webpack
Allows for compilation and requiring of [wisp](https://github.com/Gozala/wisp) files via webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Install the loader for your project

```sh
npm install -D wisp-loader
```

Require a wisp file in your Javascript code, or set a wisp file as your `entry` in your webpack config.

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

# Changelog

# 0.1.3
- Removed unneeded string munging of `require()` calls
- Pushes `'.wisp'` onto the `resolve.extensions` array to enable `require()` calls to work correctly
- Added proper error handling, so failed compilations don't crash the `webpack-dev-server`

# 0.1.2
- Moved `wisp` dependency to a proper _peerDependencies_ block
- Performance tested vs `transform-loader` with `wispify`, basically identical in compilation time with a micro-benchmark

# 0.1.1
- Fixed up the npm publish
- Tested more of the loader

# 0.1.0
- Initial release, stuffed up the npm publish

# License

MIT
