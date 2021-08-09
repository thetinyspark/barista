import { canvasPixelToRGBA, clearCanvas, create2DScene, createCanvas, createDisplayObjectFromCanvas, createGlScene, fillRect, getCanvasPixel, getRedFilter } from "../test_utils/canvas.utils.spec";

describe( 
    'IFilter test suite', 
    ()=>{
        it('should apply filter with a 2d renderer', 
        ()=>{
            // given 
            const whiteCanvas:HTMLCanvasElement = createCanvas(200,200);
            clearCanvas(whiteCanvas); 
            fillRect(whiteCanvas, "white", 0, 0, 200,200);
            const stage = create2DScene(640,480);
            const bmp = createDisplayObjectFromCanvas("white", whiteCanvas);
            stage.addChild(bmp);

            // when 
            bmp.filters.push( getRedFilter());
            bmp.filters.forEach( filter => filter.save(bmp));
            bmp.filters.forEach( filter => filter.apply(bmp));
            stage.nextFrame();

            // then 
            const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
            expect(pixel).toEqual({r:255, g:0, b:0, a:255});
        });

        it('should apply filter with a gl renderer', 
        ()=>{
            // given 
            const whiteCanvas:HTMLCanvasElement = createCanvas(200,200);
            clearCanvas(whiteCanvas); 
            fillRect(whiteCanvas, "white", 0, 0, 200,200);
            const stage = createGlScene(640,480);
            const bmp = createDisplayObjectFromCanvas("white", whiteCanvas);
            stage.addChild(bmp);

            // when 
            bmp.filters.push( getRedFilter());
            bmp.filters.forEach( filter => filter.save(bmp));
            bmp.filters.forEach( filter => filter.apply(bmp));
            stage.nextFrame();

            // then 
            const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
            expect(pixel).toEqual({r:255, g:0, b:0, a:255});
        });

        it('should be able to rollback filters with canvas 2d scene', 
        ()=>{
            // given 
            const whiteCanvas:HTMLCanvasElement = createCanvas(200,200);
            clearCanvas(whiteCanvas); 
            fillRect(whiteCanvas, "white", 0, 0, 200,200);
            const stage = create2DScene(640,480);
            const bmp = createDisplayObjectFromCanvas("white", whiteCanvas);
            stage.addChild(bmp);

            // when 
            bmp.filters.push( getRedFilter());
            bmp.filters.forEach( filter => filter.save(bmp));
            bmp.filters.forEach( filter => filter.apply(bmp));
            bmp.filters.forEach( filter => filter.rollback(bmp));
            stage.nextFrame();

            // then 
            const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
            expect(pixel).toEqual({r:255, g:255, b:255, a:255});
        });

        it('should be able to rollback filters with gl scene', 
        ()=>{
            // given 
            const whiteCanvas:HTMLCanvasElement = createCanvas(200,200);
            clearCanvas(whiteCanvas); 
            fillRect(whiteCanvas, "white", 0, 0, 200,200);
            const stage = createGlScene(640,480);
            const bmp = createDisplayObjectFromCanvas("white", whiteCanvas);
            stage.addChild(bmp);

            // when 
            bmp.filters.push( getRedFilter());
            bmp.filters.forEach( filter => filter.save(bmp));
            bmp.filters.forEach( filter => filter.apply(bmp));
            bmp.filters.forEach( filter => filter.rollback(bmp));
            stage.nextFrame();

            // then 
            const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
            expect(pixel).toEqual({r:255, g:255, b:255, a:255});
        });
    }
);