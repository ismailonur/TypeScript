"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Xiaomi MI 9T", "Telefon", 3500), new Product_1.Product(2, "Xiaomi MI 10T", "Telefon", 3500), new Product_1.Product(3, "Xiaomi MI 10", "Telefon", 3500), new Product_1.Product(4, "Xiaomi MI 11", "Telefon", 3500));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
