var path = require('path');
var wisp_compiler = require('wisp/compiler'); 

module.exports = function(source) {
    this.cacheable();
    var raw = wisp_compiler.compile(source, { 'source-uri': this.resourcePath });

    // Munge the result to fix local requires, to load through .wisp for WebPack
    var result = raw['code'].replace(/require\(\'\.(.*)\'\);/, function(match, capture) {
        return 'require(\'.' + capture + '.wisp\');';
    });

    return result;
};
