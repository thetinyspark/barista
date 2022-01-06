import Grid3D from "../../../../../../lib/sdk/common/model/space/partitioning/grid/Grid3D";

describe('Grid3D test suite', 
()=>{

    let grid = new Grid3D<string>();
    const numRows = 100;
    const numCols = 100;
    const numLayers = 100;

    beforeEach( 
        ()=>{
            grid.reset(numRows, numCols, numLayers);
        }
    )

    it('should create a grid properly', 
    ()=>{
        expect(grid).toBeTruthy();
    }); 

    it(`should reset grid properties`, 
    ()=>{
        expect(grid.numRows).toEqual(numRows);
        expect(grid.numCols).toEqual(numCols);
        expect(grid.numLayers).toEqual(numLayers);
    });

    it(`#getAt should be able to return null if an object is not at the specified coordinates`, 
    ()=>{
        expect(grid.getAt(50,50,50)).toBeNull();
    });

    it(`should be able to add and retrieve an object at the specified coordinates`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(50,50,50,msg);
        expect(grid.getAt(50,50,50)).toEqual(msg);
    });

    it(`should not be able to add an object out of the bounds`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(-1,-1,-1,msg);
        grid.addAt(1000,1000,1000,msg);
        expect(grid.getAt(-1,-1,-1)).toBeNull();
        expect(grid.getAt(1000,1000,1000)).toBeNull();
    });

    it(`should be able to say if the specified coordinates are out of bounds`, 
    ()=>{
        expect(grid.isOutOfBounds(-1,-1,-1)).toBeTrue();
        expect(grid.isOutOfBounds(1000,1000,1000)).toBeTrue();
        expect(grid.isOutOfBounds(100,100,100)).toBeTrue();
        expect(grid.isOutOfBounds(0,0,0)).toBeFalse();
        expect(grid.isOutOfBounds(99,99,99)).toBeFalse();
    });

    it(`should be able to add and remove an  object at the specified coordinates`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(50,50,50,msg);
        grid.removeAt(50,50,50);
        expect(grid.getAt(50,50,50)).toBeNull();
    });

    it(`should be able to destroy the grid`, 
    ()=>{
        grid.addAt(50,50,50,"hello");
        grid.addAt(51,51,51,"world");
        grid.destroy();

        expect(grid.getAt(50,50,50)).toBeNull();
        expect(grid.getAt(51,51,51)).toBeNull();
        expect(grid.numCols).toEqual(0);
        expect(grid.numRows).toEqual(0);
    });

    it('should be able to loop over every element of the grid', 
    ()=>{
        // given 
        grid.reset(2, 2, 2);
        let counter:number = 0; 
        let expected = grid.numCols * grid.numRows * grid.numLayers;

        // when 
        grid.forEach(
            (value, row, col, layer)=>{
                counter++; 
                grid.addAt(row, col, layer, "coucou"); 
                expect(grid.getAt(row, col, layer)).not.toBeNull();
            }
        ); 

        expect(counter).toEqual(expected);
    })

});