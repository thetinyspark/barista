import { GameNode } from "../../../../lib/sdk/common/model/node";
import { Grid3D } from "../../../../lib/sdk/common/model/space/partitioning/grid";
import {PathFinder3D} from "../../../../lib/sdk/common/utils";

describe('PathFinder3D test suite', 
()=>{
    const data:number[][][] = [
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 1, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 1, 1],
          [1, 0, 1, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ]
      ]
    ;
      
    const finder = new PathFinder3D();
    const grid:Grid3D<number> = new Grid3D<number>();

    beforeEach(
        ()=>{
            grid.reset(data[0].length,data[1].length, data.length);
            grid.forEach(
                (value:number, row:number, col:number, layer:number)=>{
                    grid.addAt(row,col,layer,data[layer][row][col]);
                }
            );
        }
    );

    it('should be able to create a PathFinder3D', 
    ()=>{
        expect(finder).toBeTruthy();
    }); 

    it('should be able to create Grid3D<GameNode> from a Grid3D<number>', 
    ()=>{

        // given when
        const graphe = finder.createGraphe(grid,0);

        // then 
        grid.forEach( 
            (value:number, row:number, col:number,layer:number)=>{
                const node = graphe.getAt(row,col,layer);
                expect(node).not.toBeNull();
                expect( (value === 0 && node.state.walkable) || (value === 1 && !node.state.walkable) ).toBeTrue();
            }
        )
    }); 

    it('should be able to resolve a path in a 3d maze', 
    ()=>{
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1,1);
        const endNode = graphe.getAt(5,5,4);

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

    it('should not be able to resolve a diag path in a 3d maze if it dont supports diags', 
    ()=>{
        // given 
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1,1);
        const endNode = graphe.getAt(5,5,4);
        
        // when
        graphe.getAt(3,1,1).state.walkable = false;
        const path = finder.findPath(graphe, startNode, endNode);
        
        // then 
        expect(path.length).toEqual(0);
    });

    it('should be able to resolve a diag path in a 3d maze if it supports diags', 
    ()=>{
        // given 
        const graphe = finder.createGraphe(grid,0);
        const startNode = graphe.getAt(1,1,1);
        const endNode = graphe.getAt(5,5,4);
        
        // when
        graphe.getAt(3,1,1).state.walkable = false;
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
        const startNode = graphe.getAt(1,1,1);
        const endNode = graphe.getAt(5,5,4);

        // then
        finder.findPath(graphe, startNode, endNode);
        finder.resetGraphe(graphe);

        // then 
        graphe.forEach( 
            (node, row:number, col:number,layer:number)=>{
                expect(node.state.g).toEqual(0);
                expect(node.state.f).toEqual(0);
                expect(node.state.h).toEqual(0);
                expect(node.state.row).toEqual(row);
                expect(node.state.col).toEqual(col);
                expect(node.state.layer).toEqual(layer);
                expect(node.state.parent).toBeNull();
            }
        );
    });

});