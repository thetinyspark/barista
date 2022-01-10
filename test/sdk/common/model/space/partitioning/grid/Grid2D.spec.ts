import Grid2D from "../../../../../../../lib/sdk/common/model/space/partitioning/grid/Grid2D";

describe('Grid2D test suite', 
()=>{

    let grid = new Grid2D<string>();
    const numRows = 100;
    const numCols = 102;

    beforeEach( 
        ()=>{
            grid.reset(numRows, numCols);
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
    });

    it(`#getAt should be able to return null if an object is not at the specified coordinates`, 
    ()=>{
        expect(grid.getAt(50,50)).toBeNull();
    });

    it(`should be able to add and retrieve an object at the specified coordinates`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(50,50,msg);
        expect(grid.getAt(50,50)).toEqual(msg);
    });

    it(`should not be able to add an object out of the bounds`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(-1,-1,msg);
        grid.addAt(1000,1000,msg);
        expect(grid.getAt(-1,-1)).toBeNull();
        expect(grid.getAt(1000,1000)).toBeNull();
    });

    it(`should be able to say if the specified coordinates are out of bounds`, 
    ()=>{
        expect(grid.isOutOfBounds(-1,-1)).toBeTrue();
        expect(grid.isOutOfBounds(1000,1000)).toBeTrue();
        expect(grid.isOutOfBounds(100,100)).toBeTrue();
        expect(grid.isOutOfBounds(0,0)).toBeFalse();
        expect(grid.isOutOfBounds(99,99)).toBeFalse();
    });

    it(`should be able to add and remove an  object at the specified coordinates`, 
    ()=>{
        const msg = "coucou";
        grid.addAt(50,50,msg);
        grid.removeAt(50,50);
        expect(grid.getAt(50,50)).toBeNull();
    });

    it(`should be able to destroy the grid`, 
    ()=>{
        grid.addAt(50,50,"hello");
        grid.addAt(51,51,"world");
        grid.destroy();

        expect(grid.getAt(50,50)).toBeNull();
        expect(grid.getAt(51,51)).toBeNull();
        expect(grid.numCols).toEqual(0);
        expect(grid.numRows).toEqual(0);
    });

    it('should be able to loop over every element of the grid', 
    ()=>{
        // given 
        grid.reset(2, 2);
        let counter:number = 0; 
        let expected = grid.numCols * grid.numRows;

        // when 
        grid.forEach(
            (value, row, col)=>{
                counter++; 
                grid.addAt(row, col, "coucou"); 
                expect(grid.getAt(row, col)).not.toBeNull();
            }
        ); 

        expect(counter).toEqual(expected);
    }); 

    it('should ge able to get neighbours', 
    ()=>{
        // given 
        grid.reset(3, 3);
        grid.forEach( 
            (value, row, col)=>{
                grid.addAt(row, col, "_"+row+"_"+col);
            }
        );
        const expected = {
            topLeft: "_0_0",
            top: "_0_1",
            topRight: "_0_2",
            left: "_1_0",
            center: "_1_1",
            right: "_1_2",
            bottomLeft: "_2_0",
            bottom: "_2_1",
            bottomRight: "_2_2",
        }

        // when 
        const neighbours = grid.getNeighbours(1,1);

        // then 
        expect(neighbours).toEqual(expected);
    });

    it('should be able to create a grid2d from a typed double array', 
    ()=>{
        // given
        const numbers = [
            [0,0,0,0,0],
            [1,2,3,4,5]
        ];

        // when
        const numericGrid:Grid2D<number> = Grid2D.from<number>(numbers);

        // then
        expect(numericGrid).not.toBeNull();
        expect(numericGrid.data).toEqual(numbers);
    });

    it('should be able to map the grid and returns another grid', 
    ()=>{
        // given
        const numbers = [[1,2],[3,4]];
        const expected = [ 
            [
                {value:1 * 2, row:0, col:0},
                {value:2 * 2, row:0, col:1},
            ], 
            [
                {value:3 * 2, row:1, col:0},
                {value:4 * 2, row:1, col:1},
            ] 
        ];
        const numericGrid:Grid2D<number> = Grid2D.from<number>(numbers);

        // when
        const anotherGrid = numericGrid.map(
            (value:number, row:number, col:number)=>{
                return {value:value * 2, row, col};
            }
        );
        

        // then
        expect(anotherGrid.data).toEqual(expected);
    });

    it('should be able to extract a portion of the grid', 
    ()=>{
        // given
        const numbers =[
            [0,0,0,0,0],
            [0,8,2,8,0],
            [0,2,2,2,0],
            [0,8,2,8,0],
            [0,0,0,0,0],
        ];

        const numericGrid:Grid2D<number> = Grid2D.from<number>(numbers);
        // when
        const extracted = numericGrid.extract(1,3,1,3);

        // then
        expect(extracted.data).toEqual(
            [
                [8,2,8],
                [2,2,2],
                [8,2,8],
            ]
        );
    });

});