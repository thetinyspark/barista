import CanvasUtils from "../../lib/utils/CanvasUtils";

describe("CanvasUtils test suite", 
()=>{

    

    describe("#create", 
    ()=>{

        it(`should create a new canvas with a specific width & height`, 
        ()=>{
            // given
            const width =  ( Math.random() * 128 ) >> 0;
            const height =  ( Math.random() * 128 ) >> 0;

            // when
            const canvas = CanvasUtils.create(width,height);

            // then
            expect(canvas).toBeTruthy();
            expect(canvas.width).toEqual(width);
            expect(canvas.height).toEqual(height);
        });
    
    });

})