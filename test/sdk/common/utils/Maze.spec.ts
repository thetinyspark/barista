import Maze2D from "../../../../lib/sdk/common/utils/Maze2D";

describe('Maze2D test suite', 
()=>{

    it('should be able to create a Maze2D', 
    ()=>{
        const maze = new Maze2D();
        expect(maze).toBeTruthy();
    }); 

});