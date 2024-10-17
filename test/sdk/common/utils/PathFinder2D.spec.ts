import { GameNode } from "../../../../lib/sdk/common/model/node";
import { Grid2D } from "../../../../lib/sdk/common/model/space/partitioning/grid";
import {FastFinder2D, PathFinder2D} from "../../../../lib/sdk/common/utils";

describe('PathFinder2D test suite', 
()=>{
    const data:number[][] = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ];
      
    const finder = new PathFinder2D();
    const grid:Grid2D<number> = new Grid2D<number>();

    beforeEach(
        ()=>{
            grid.reset(data.length,data[0].length);
            grid.forEach(
                (value:number, row:number, col:number)=>{
                    grid.addAt(row,col,data[row][col]);
                }
            );
        }
    );

    it('should be able to create a PathFinder2D', 
    ()=>{
        expect(finder).toBeTruthy();
    }); 

    it('should be able to create Grid2D<GameNode> from a Grid2D<number>', 
    ()=>{

        // given when
        const graphe = finder.createGraphe(grid,0);

        // then 
        grid.forEach( 
            (value:number, row:number, col:number)=>{
                const node = graphe.getAt(row,col);
                expect(node).not.toBeNull();
                expect( (value === 0 && node.state.walkable) || (value === 1 && !node.state.walkable) ).toBeTrue();
            }
        )
    }); 

    it('should be able to resolve a path in a 2d maze', 
    ()=>{
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1);
        const endNode = graphe.getAt(3,1);

        // when
        const path = finder.findPath(graphe, startNode, endNode);
        let currentNode = endNode.state.parent;
        while( currentNode.state.parent !== null ){
            currentNode = currentNode.state.parent;
        }


        // then 
        expect(path.length).toBeGreaterThan(0);
        expect(path[0]).toBe(startNode);
        expect(path[path.length-1]).toBe(endNode);
        expect(currentNode).toBe(startNode);
    });

    it('should not be able to resolve a diag path in a 2d maze if it dont supports diags', 
    ()=>{
        // given 
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1);
        const endNode = graphe.getAt(3,1);
        
        // when
        graphe.getAt(1,3).state.walkable = false;
        const path = finder.findPath(graphe, startNode, endNode);
        
        // then 
        expect(path.length).toEqual(0);
    });

    it('should be able to resolve a diag path in a 2d maze if it supports diags', 
    ()=>{
        // given 
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1);
        const endNode = graphe.getAt(3,1);
        
        // when
        graphe.getAt(1,3).state.walkable = false;
        const path = finder.findPath(graphe, startNode, endNode, true);
        let currentNode = endNode.state.parent;
        while( currentNode.state.parent !== null ){
            currentNode = currentNode.state.parent;
        }


        // then 
        expect(path.length).toBeGreaterThan(0);
        expect(path[0]).toBe(startNode);
        expect(path[path.length-1]).toBe(endNode);
        expect(currentNode).toBe(startNode);
    });

    it('should be able to reset graphe', 
    ()=>{
        // given
        const graphe = finder.createGraphe(grid,0);
        const endNode = graphe.getAt(1,3);
        const startNode = graphe.getAt(1,1);

        // then
        finder.findPath(graphe, startNode, endNode);
        finder.resetGraphe(graphe);

        // then 
        graphe.forEach( 
            (node, row:number, col:number)=>{
                expect(node.state.g).toEqual(0);
                expect(node.state.f).toEqual(0);
                expect(node.state.h).toEqual(0);
                expect(node.state.row).toEqual(row);
                expect(node.state.col).toEqual(col);
                expect(node.state.parent).toBeNull();
            }
        );
    });

    fit('FastFinder should resolve the same path than pathfinder2d', 
    ()=>{
        // given

        const finders = [new FastFinder2D(), new PathFinder2D()];

          // when
        const paths = finders.map( 
            (currentFinder)=>{
                const graphe = currentFinder.createGraphe(grid,0);
                const startNode = graphe.getAt(1,1) as GameNode;
                const endNode = graphe.getAt(3,1) as GameNode;
                const path = finder.findPath(graphe, startNode, endNode);
                return path.map( 
                    (node)=>{
                        return {
                            row: node.state.row,
                            col: node.state.col,
                        }
                    }
                );
            }
        );

        // then 
        expect(paths[0]).toEqual(paths[1]);
    });

    fit('FastFinder should be faster than pathfinder2d', 
    ()=>{
        // given
        const testFinder = (currentFinder)=>{
            const graphe = currentFinder.createGraphe(grid,0);
            const startNode = graphe.getAt(1,1);
            const endNode = graphe.getAt(3,1);
            const start = Date.now();
            for( let i = 0; i < 10000; i++ ){   
                finder.resetGraphe(graphe);
                const path = finder.findPath(graphe, startNode, endNode);
            }
            const time = Date.now() - start;
            return time;
        };

        
        // when
        const time1 = testFinder(new FastFinder2D());
        const time2 = testFinder(new PathFinder2D());

        // then
        expect(time1).toBeLessThan(time2);
    });

});