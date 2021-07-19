"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    function Book(title, init) {
        Book.validateBook(title, init);
        this.__title = title;
        this.__init = init;
    }
    ;
    Book.prototype.getTitle = function () {
        return this.__title;
    };
    ;
    Book.prototype.create = function (k, v) {
        if (!k)
            throw new Error("A key must be specified.");
        if (typeof k !== "string")
            throw new TypeError("Key must be a string.");
        if (!v)
            throw new Error("A value for the key \"" + k + "\" must be specified.");
        this.__init[k] = v;
    };
    ;
    Book.prototype.getValue = function (k) {
        if (!this.__init.hasOwnProperty(k))
            throw new RangeError("No value was found for such key. " + k);
        return this.__init[k];
    };
    ;
    Book.prototype.remove = function (k) {
        if (!this.__init.hasOwnProperty(k))
            throw new RangeError("No value was found for such key. " + k);
        return delete this.__init[k];
    };
    ;
    Book.prototype.toJSON = function () {
        return JSON.stringify(this.__init);
    };
    ;
    Book.validateBook = function (title, dictionary) {
        if (!title)
            throw new Error("A title for this book must be specified.");
        if (typeof title !== "string")
            throw new TypeError("Book title must be a string.");
        if (!dictionary)
            throw new Error("An init object must be specified.");
        if (typeof dictionary !== "object")
            throw new TypeError("Book must be an object.");
    };
    ;
    return Book;
}());
exports["default"] = Book;
