var path = require('path');
var wisp_compiler = require('wisp/compiler');
var loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable();

    // This is done to avoid having to mess with the `require()` calls in your code
    this.options.resolve.extensions.push('.wisp');

    var query = this.query instanceof Object ? this.query : loaderUtils.parseQuery(this.query);
    query['source-uri'] =  this.resourcePath;

    var result = wisp_compiler.compile(source, query);

    if ('error' in result) {
        // TODO: We really need to pull the string in a slightly nicer way
        var readableErr = result.error.toString();
        this.emitError(readableErr);

        return readableErr;
    }

    return result.code;
};
