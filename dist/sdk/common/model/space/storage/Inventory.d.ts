import IStorable from "./IStorable";
export default class Inventory {
    private _maxWeight;
    private _maxItems;
    private _items;
    constructor();
    reset(maxItems: number, maxWeight: number): void;
    add(item: IStorable): boolean;
    getAllByCategory(category: string): IStorable[];
    getAllCategories(): string[];
    getAllGroupByCategory(): {
        category: string;
        items: IStorable[];
    }[];
    remove(item: IStorable): IStorable;
    contains(item: IStorable): boolean;
    get remainingSpace(): number;
    get totalWeight(): number;
    get numItems(): number;
    get remainingWeight(): number;
    get maxWeight(): number;
    set maxWeight(value: number);
    get maxItems(): number;
    set maxItems(value: number);
}
