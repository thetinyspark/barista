"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    _maxWeight = 0;
    _maxItems = 0;
    _items = [];
    constructor() {
        this.reset(0, 0);
    }
    reset(maxItems, maxWeight) {
        this.maxWeight = maxWeight;
        this.maxItems = maxItems;
        this._items = [];
    }
    add(item) {
        if (this.remainingSpace > 0 && this.remainingWeight >= item.weight) {
            this._items.push(item);
            return true;
        }
        return false;
    }
    getAllByCategory(category) {
        return this._items.filter((current) => {
            return current.category === category;
        });
    }
    getAllCategories() {
        const categories = this._items.map(current => current.category);
        const set = new Set(categories);
        return Array.from(set);
    }
    getAllGroupByCategory() {
        const categories = this.getAllCategories();
        return categories.map((cat) => {
            return { category: cat, items: this.getAllByCategory(cat) };
        });
    }
    remove(item) {
        const index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
            return item;
        }
        return null;
    }
    contains(item) {
        return this._items.indexOf(item) > -1;
    }
    get remainingSpace() {
        return this.maxItems - this._items.length;
    }
    get totalWeight() {
        let total = 0;
        for (let item of this._items) {
            total += item.weight;
        }
        return total;
    }
    get numItems() {
        return this._items.length;
    }
    get remainingWeight() {
        return this.maxWeight - this.totalWeight;
    }
    get maxWeight() {
        return this._maxWeight;
    }
    set maxWeight(value) {
        this._maxWeight = value < 0 ? 0 : value;
    }
    get maxItems() {
        return this._maxItems;
    }
    set maxItems(value) {
        this._maxItems = value < 0 ? 0 : value;
    }
}
exports.default = Inventory;
