import { GameNode } from "../../../../lib/sdk/common/model/node";
import {Maze3D,MazeNodeType} from "../../../../lib/sdk/common/utils/";

describe('Maze3D test suite', 
()=>{

    it('should be able to create a Maze3D', 
    ()=>{
        const maze = new Maze3D();
        expect(maze).toBeTruthy();
    }); 

    it('should be able to reset maze', 
    ()=>{
        // given
        const maze = new Maze3D();

        // when 
        maze.reset(10,5,5,1,1,1);

        // then 
        expect(maze.getRows()).toEqual(10);
        expect(maze.getCols()).toEqual(5);
        expect(maze.getLayers()).toEqual(5);
        expect(maze.getData().flat(3).length).toEqual(250);
    }); 

    it('should have a state.type property on each node which is equal to BLOCK or WALL after reset', 
    ()=>{
        // given
        const maze = new Maze3D();
        const types = [MazeNodeType.BLOCK, MazeNodeType.WALL]

        // when 
        maze.reset(10,10,10,1,1,1);
        const nodes = maze.getData().flat(3);

        // then 
        nodes.forEach( 
            (node:GameNode)=>{
                expect(types).toContain(node.state.type);
            }
        );
    });

    it('should dig a wall between current node and a random BLOCK neighbour', 
    ()=>{
        // given
        const maze = new Maze3D();
        maze.reset(10,10,10,1,1,1);
        const lastCurrentNode = maze.getCurrentNode();

        // when 
        maze.step();

        // then
        expect(maze.getCurrentNode()).not.toBeNull();
        expect(lastCurrentNode).not.toBe(maze.getCurrentNode());
        expect(maze.getCurrentNode().state.type).toEqual(MazeNodeType.FREE);
        expect(lastCurrentNode.state.type).toEqual(MazeNodeType.FREE);
    });

    it('should not have finished the maze generation if there is one remaining BLOCK', 
    ()=>{
        // given
        const maze = new Maze3D();
        maze.reset(10,10,10,1,1,1);

        // when 
        maze.step();
        const nodeTypes = maze.getData().flat(2).map( node => node.state.type );

        // then
        expect(nodeTypes).toContain(MazeNodeType.FREE);
        expect(nodeTypes).toContain(MazeNodeType.BLOCK);
        expect(nodeTypes).toContain(MazeNodeType.WALL);
        expect(maze.isFinished()).toBeFalse();
    });

    it('should be able to finalize generation and should not contain a BLOCK is the maze generation is finished', 
    ()=>{
        // given
        const maze = new Maze3D();
        maze.reset(10,10,10,1,1,1);

        // when 
        maze.finalize();
        const nodeTypes = maze.getData().flat(2).map( node => node.state.type );

        // then
        expect(nodeTypes).not.toContain(MazeNodeType.BLOCK);
    });

});