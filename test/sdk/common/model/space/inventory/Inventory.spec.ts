import Inventory from "../../../../../../lib/sdk/common/model/space/storage/Inventory";

describe("Inventory test suite", () => {
  const inventory = new Inventory();

  it('should reset the inventory', ()=>{

    inventory.reset(1,1);
    inventory.add({weight:0, category: "main"});
    expect(inventory.numItems).toEqual(1);

    inventory.reset(100,100); 
    expect(inventory.maxWeight).toEqual(100);
    expect(inventory.maxItems).toEqual(100);
    expect(inventory.numItems).toEqual(0);
  }); 

  it('should not be able to set a negative maxWeight', ()=>{
    inventory.maxWeight = -1; 
    expect(inventory.maxWeight).toBeGreaterThanOrEqual(0);
  });

  it('should not be able to set a negative maxItems', ()=>{
    inventory.maxItems = -1; 
    expect(inventory.maxItems).toBeGreaterThanOrEqual(0);
  });

  it('should tell the remaning space', ()=>{
    inventory.reset(100,100); 
    inventory.add( {weight: 0, category:"main"});
    expect(inventory.remainingSpace).toEqual(99);
  });

  it('should be able to store an IStorabe item if there is remaining space', ()=>{
    inventory.reset(100,100);
    const stored = inventory.add( {weight: 0, category:"main"});
    expect(stored).toBeTrue();
  }); 

  it('should be able to calculate the totalWeight of all stored items', ()=>{
    inventory.reset(100,100);
    const max:number = 10;
    const weight:number = 1.5;
    for( let i:number = 0; i < max; i++  ){
      inventory.add( {weight: weight, category:"main"});
    }

    expect(inventory.totalWeight).toEqual(weight * max);
  }); 

  it('should be able to calculate the remaining weight', ()=>{
    inventory.reset(100,100);
    const max:number = 10;
    const weight:number = 1.5;
    for( let i:number = 0; i < max; i++  ){
      inventory.add( {weight: weight, category:"main"});
    }

    expect(inventory.remainingWeight).toEqual(100-(weight * max));
  })

  it('should not be able to add items if there is no remaningSpace', ()=>{
    inventory.reset(100,100); 
    const max:number = 200;
    for( let i:number = 0; i < max; i++  ){
      inventory.add( {weight: 0, category:"main"});
    }

    expect(inventory.numItems).toEqual(100);
  });

  it('should not be able to add items if there is no remaningWeight', ()=>{
    inventory.reset(100,100); 
    const max:number = 200;
    for( let i:number = 0; i < max; i++  ){
      inventory.add( {weight: 3, category:"main"});
    }

    expect(inventory.numItems).toEqual(33);
    expect(inventory.remainingWeight).toEqual(1);
    expect(inventory.remainingSpace).toEqual(67);
  }); 

  it('should be able to get all stored items by category', ()=>{
    inventory.reset(100,100); 
    const max:number = 200;
    const categories:string[] = ['red','blue','green'];
    for( let i:number = 0; i < max; i++  ){
      const cat:string = categories[i%3];
      inventory.add( {weight: 0, category:cat});
    }

    const red = inventory.getAllByCategory('red'); 
    const blue = inventory.getAllByCategory('blue'); 
    const green = inventory.getAllByCategory('green'); 

    expect(red.length).toEqual(34);
    expect(blue.length).toEqual(33);
    expect(green.length).toEqual(33);
  }); 

  it('should be able to return all categories', ()=>{
    inventory.reset(100,100); 
    const max:number = 200;
    const categories:string[] = ['red','blue','green'];
    for( let i:number = 0; i < max; i++  ){
      const cat:string = categories[i%3];
      inventory.add( {weight: 0, category:cat});
    }

    expect(inventory.getAllCategories()).toEqual(categories);
  });

  it('should be able to remove an item', ()=>{
    inventory.reset(100,100); 
    const item = {weight: 0, category:"my_item"};
    inventory.add( item);
    const removed = inventory.remove(item);
    expect(removed).toEqual(item);
  });

  it('should return null if you try to remove an object which is not in the inventory', ()=>{
    inventory.reset(100,100); 
    const item = {weight: 0, category:"my_item"};
    const removed = inventory.remove(item);
    expect(removed).toBeNull();
  });

  it('should be able to say if an object is in the inventory or not', ()=>{
    inventory.reset(100,100); 
    const item = {weight: 0, category:"my_item"};

    expect(inventory.contains(item)).toBeFalse();
    
    inventory.add(item)
    expect(inventory.contains(item)).toBeTrue();
    
    inventory.remove(item)
    expect(inventory.contains(item)).toBeFalse();
  });

  it('should be able to return all the items grouped by categories', ()=>{
    // given
    inventory.reset(100,100); 
    const item1 = {weight: 0, category:"red"};
    const item2 = {weight: 0, category:"red"};
    const item3 = {weight: 0, category:"red"};

    const item4 = {weight: 0, category:"green"};
    const item5 = {weight: 0, category:"green"};
    const item6 = {weight: 0, category:"green"};

    const item7 = {weight: 0, category:"blue"};
    const item8 = {weight: 0, category:"blue"};
    const item9 = {weight: 0, category:"blue"};

    const expected = [
      {category:"red", items: [item1, item2, item3]},
      {category:"green", items: [item4, item5, item6]},
      {category:"blue", items: [item7, item8, item9]}
    ]; 

    inventory.add(item1);
    inventory.add(item2);
    inventory.add(item3);
    inventory.add(item4);
    inventory.add(item5);
    inventory.add(item6);
    inventory.add(item7);
    inventory.add(item8);
    inventory.add(item9);

    // when
    const result = inventory.getAllGroupByCategory(); 

    // then 
    expect(result).toEqual(expected);
  })


});
