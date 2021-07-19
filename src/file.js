"use strict";
exports.__esModule = true;
exports.writeFile = exports.readFile = exports.renameFile = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var renameFile = function (oldPath, newPath) {
    try {
        fs_1.renameSync(path_1.join(__dirname + oldPath), path_1.join(__dirname + newPath));
        return newPath;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.renameFile = renameFile;
var readFile = function (path, sep) {
    /**
     * @internal
     */
    var dict = {};
    try {
        var file = fs_1.readFileSync(path_1.join(__dirname + path), "utf8");
        var lines = file.replace("\r", "").split("\n");
        var newLines = [];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            newLines.push(line.replace("\r", ""));
        }
        var words = [];
        for (var _a = 0, newLines_1 = newLines; _a < newLines_1.length; _a++) {
            var newLine = newLines_1[_a];
            words.push(newLine.toLowerCase().split(sep));
        }
        for (var _b = 0, words_1 = words; _b < words_1.length; _b++) {
            var word = words_1[_b];
            dict[word[0]] = word[1];
        }
        return dict;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.readFile = readFile;
var writeFile = function (dict, path) {
    try {
        for (var _i = 0, _a = Object.entries(dict); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            fs_1.writeFileSync(path_1.join(__dirname + path), key + ": " + value);
        }
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.writeFile = writeFile;
