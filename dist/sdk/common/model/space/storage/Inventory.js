"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = /** @class */ (function () {
    function Inventory() {
        this._maxWeight = 0;
        this._maxItems = 0;
        this._items = [];
        this.reset(0, 0);
    }
    Inventory.prototype.reset = function (maxItems, maxWeight) {
        this.maxWeight = maxWeight;
        this.maxItems = maxItems;
        this._items = [];
    };
    Inventory.prototype.add = function (item) {
        if (this.remainingSpace > 0 && this.remainingWeight >= item.weight) {
            this._items.push(item);
            return true;
        }
        return false;
    };
    Inventory.prototype.getAllByCategory = function (category) {
        return this._items.filter(function (current) {
            return current.category === category;
        });
    };
    Inventory.prototype.getAllCategories = function () {
        var categories = this._items.map(function (current) { return current.category; });
        var set = new Set(categories);
        return Array.from(set);
    };
    Inventory.prototype.getAllGroupByCategory = function () {
        var _this = this;
        var categories = this.getAllCategories();
        return categories.map(function (cat) {
            return { category: cat, items: _this.getAllByCategory(cat) };
        });
    };
    Inventory.prototype.remove = function (item) {
        var index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
            return item;
        }
        return null;
    };
    Inventory.prototype.contains = function (item) {
        return this._items.indexOf(item) > -1;
    };
    Object.defineProperty(Inventory.prototype, "remainingSpace", {
        get: function () {
            return this.maxItems - this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "totalWeight", {
        get: function () {
            var total = 0;
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                total += item.weight;
            }
            return total;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "numItems", {
        get: function () {
            return this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "remainingWeight", {
        get: function () {
            return this.maxWeight - this.totalWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "maxWeight", {
        get: function () {
            return this._maxWeight;
        },
        set: function (value) {
            this._maxWeight = value < 0 ? 0 : value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "maxItems", {
        get: function () {
            return this._maxItems;
        },
        set: function (value) {
            this._maxItems = value < 0 ? 0 : value;
        },
        enumerable: false,
        configurable: true
    });
    return Inventory;
}());
exports.default = Inventory;
