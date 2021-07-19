"use strict";
exports.__esModule = true;
var file_1 = require("./file");
var main = function () {
    var fileRenamed = file_1.renameFile("../../py/my-passwords.temp.txt", "../../my-passwords.txt");
    var dict = file_1.readFile(fileRenamed, ";");
    file_1.writeFile(dict, fileRenamed);
};
main();
