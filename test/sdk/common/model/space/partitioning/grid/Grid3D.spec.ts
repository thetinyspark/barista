import Grid3D from "../../../../../../../lib/sdk/common/model/space/partitioning/grid/Grid3D";

describe('Grid3D test suite', 
()=>{

    let grid = new Grid3D<string>();
    const numRows = 100;
    const numCols = 102;
    const numLayers = 103;

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
    }); 

    it('should ge able to get neighbours', 
    ()=>{
        // given 
        grid.reset(3, 3, 3);
        grid.forEach( 
            (value, row, col, layer)=>{
                grid.addAt(row, col, layer,"_"+row+"_"+col+"_"+layer);
            }
        );
        const expected = {
            topLeftFront: "_0_0_0",
            topFront: "_0_1_0",
            topRightFront: "_0_2_0",
            leftFront: "_1_0_0",
            centerFront: "_1_1_0",
            rightFront: "_1_2_0",
            bottomLeftFront: "_2_0_0",
            bottomFront: "_2_1_0",
            bottomRightFront: "_2_2_0",

            topLeftBack: "_0_0_2",
            topBack: "_0_1_2",
            topRightBack: "_0_2_2",
            leftBack: "_1_0_2",
            centerBack: "_1_1_2",
            rightBack: "_1_2_2",
            bottomLeftBack: "_2_0_2",
            bottomBack: "_2_1_2",
            bottomRightBack: "_2_2_2",
            
            topLeft: "_0_0_1",
            top: "_0_1_1",
            topRight: "_0_2_1",
            left: "_1_0_1",
            center: "_1_1_1",
            right: "_1_2_1",
            bottomLeft: "_2_0_1",
            bottom: "_2_1_1",
            bottomRight: "_2_2_1",
        }

        // when 
        const neighbours = grid.getNeighbours(1,1,1);

        // then 
        expect(neighbours).toEqual(expected);
    });

});