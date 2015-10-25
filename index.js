var path = require('path');
var wisp_compiler = require('wisp/compiler'); 

module.exports = function(source) {
    this.cacheable();

    // This is done to avoid having to mess with the `require()` calls in your code
    this.options.resolve.extensions.push('.wisp');

    var result = wisp_compiler.compile(source, { 'source-uri': this.resourcePath });

    if ('error' in result) {
        // TODO: We really need to pull the string in a slightly nicer way
        var readableErr = result.error.toString();
        this.emitError(readableErr);

        return readableErr;
    }

    return result.code;
};
