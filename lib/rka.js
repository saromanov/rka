"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.RKA = RKA;
Object.defineProperty(exports, "__esModule", {
    value: true
});

var hasha = _interopRequire(require("hasha"));

function RKA(str, pattern) {
    var hpattern = hasha(pattern);
    var hs = hasha(str);
    var strlength = str.length;
    var patternlength = pattern.length;
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
}