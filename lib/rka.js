"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var hasha = _interopRequire(require("hasha"));

module.exports = function (str, pattern) {
    var strlength = str.length;
    var patternlength = pattern.length;
    var hpattern = hasha(pattern);
    var hs = hasha(str.substring(0, pattern.length));
    if (strlength < patternlength) {
        return -1;
    }
    for (var i = 0; i < strlength - patternlength + 1; ++i) {
        if (hpattern == hs) {
            //console.log(str.substr(i, i+patternlength-1))
            console.log("PATTERN: ", pattern);
            console.log("RESULT: ", str.substring(i, i + patternlength - 1));
            return i - 1;
        }
        //console.log(i, i + patternlength, str);
        console.log(str.substring(i, i + patternlength));
        hs = hasha(str.substring(i, i + patternlength));
    }
    return -1;
};