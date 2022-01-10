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

    
    it('should be able to create a grid3d from a typed triple array', 
    ()=>{
        // given
        const numbers = [
            [
                [0,0,0,0,0],
                [0,0,0,0,0]
            ], 
            [
                [1,1,1,1,1],
                [1,1,1,1,1]
            ]
        ];

        // when
        const numericGrid:Grid3D<number> = Grid3D.from<number>(numbers);

        // then
        expect(numericGrid).not.toBeNull();
        expect(numericGrid.data).toEqual(numbers);
    });

    it('should be able to map the grid and returns another grid', 
    ()=>{
        // given
        const numbers = [
            [
                [1,2],
                [3,4]
            ],
            [
                [5,6],
                [7,8]
            ],
        ];
        const expected = [
            [ 
                [
                    {value:1 * 2, row:0, col:0, layer:0},
                    {value:2 * 2, row:0, col:1, layer:0},
                ], 
                [
                    {value:3 * 2, row:1, col:0, layer:0},
                    {value:4 * 2, row:1, col:1, layer:0},
                ] 
            ],
            [ 
                [
                    {value:5 * 2, row:0, col:0, layer:1},
                    {value:6 * 2, row:0, col:1, layer:1},
                ], 
                [
                    {value:7 * 2, row:1, col:0, layer:1},
                    {value:8 * 2, row:1, col:1, layer:1},
                ] 
            ],
        ];

        const numericGrid:Grid3D<number> = Grid3D.from<number>(numbers);

        // when
        const anotherGrid = numericGrid.map(
            (value:number, row:number, col:number,layer:number)=>{
                return {value:value * 2, row, col,layer};
            }
        );
        

        // then
        expect(anotherGrid.data).toEqual(expected);
    });

    it('should be able to extract a portion of the grid', 
    ()=>{
        // given
        const numbers = [
            [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
            ], 
            [
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
            ],
            [
                [2,2,2,2,2],
                [2,2,2,2,2],
                [2,2,2,2,2],
            ]
        ];

        const numericGrid:Grid3D<number> = Grid3D.from<number>(numbers);
        // when
        const extracted = numericGrid.extract(1,2,0,0,0,1);

        // then
        expect(extracted.data).toEqual(
            [
                [
                    [0],
                    [0]
                ],
                [
                    [1],
                    [1]
                ]
            ]
        );
    });

});