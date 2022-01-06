import IStorable from "./IStorable";

export default class Inventory{

  private _maxWeight: number = 0;
  private _maxItems:number = 0
  private _items:IStorable[] = [];

  constructor(){
    this.reset(0,0);
  }

  public reset(maxItems:number, maxWeight:number):void{
    this.maxWeight = maxWeight; 
    this.maxItems = maxItems;
    this._items = [];
  }

  public add(item:IStorable):boolean{
    if( this.remainingSpace > 0 && this.remainingWeight >= item.weight ){
      this._items.push(item); 
      return true;
    }
    
    return false;
  }

  public getAllByCategory(category:string):IStorable[]{
    return this._items.filter( 
      (current:IStorable)=>{
        return current.category === category;
      }
    );
  }

  public getAllCategories():string[]{
    const categories = this._items.map( current => current.category ); 
    const set = new Set(categories);
    return Array.from(set);
  }

  public getAllGroupByCategory():{category:string, items:IStorable[]}[]{
    const categories = this.getAllCategories(); 
    return categories.map( 
      (cat:string)=>{
        return {category: cat, items: this.getAllByCategory(cat)}
      }
    );
  }

  public remove(item:IStorable):IStorable{
    const index = this._items.indexOf(item); 
    if( index > -1 ){
      this._items.splice(index, 1);
      return item;
    }

    return null;
  }

  public contains(item:IStorable):boolean{
    return this._items.indexOf(item) > -1;
  }

  public get remainingSpace():number{
    return this.maxItems - this._items.length;
  }

  public get totalWeight():number{
    let total:number = 0; 
    for( let item of this._items ){
      total += item.weight; 
    }
    return total;
  }

  public get numItems():number{
    return this._items.length;
  }

  public get remainingWeight():number{
    return this.maxWeight - this.totalWeight;
  }

  public get maxWeight(): number {
    return this._maxWeight;
  }

  public set maxWeight(value: number) {
    this._maxWeight = value < 0 ? 0 : value;
  }

  public get maxItems(): number {
    return this._maxItems;
  }

  public set maxItems(value: number) {
    this._maxItems = value < 0 ? 0 : value;
  }
}
