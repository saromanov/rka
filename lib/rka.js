"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var hasha = _interopRequire(require("hasha"));

module.exports = function (str, pattern) {
    var strlength = str.length;
    var patternlength = pattern.length;
    var hpattern = hasha(pattern);
    var hs = hasha(str.substr(0, pattern.length));
    if (strlength < patternlength) {
        return -1;
    }
    for (var i = 0; i < strlength - patternlength + 1; ++i) {
        if (hpattern == hs) {
            if (str.substr(i, i + patternlength - 1) === pattern) {
                return i;
            }
        }
        hs = hasha(str.substr(i + 1, i + patternlength));
    }
    return -1;
};