"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var hasha = _interopRequire(require("hasha"));

module.exports = function (str, pattern) {
    var strlength = str.length;
    var patternlength = pattern.length;
    if (str == pattern) {
        return 0;
    }
    var hpattern = hasha(pattern);
    var hs = hasha(str.substring(0, pattern.length));
    if (strlength < patternlength) {
        return -1;
    }
    for (var i = 1; i <= strlength - patternlength + 1; ++i) {
        if (hpattern == hs) {
            if (str.substring(i - 1, i + patternlength - 1) == pattern) {
                return i - 1;
            }
        }
        hs = hasha(str.substring(i, i + patternlength));
    }
    return -1;
};