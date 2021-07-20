import Animation, {AnimationEvent} from "../../lib/display/Animation";
import Texture from "../../lib/texture/Texture";
import IRenderer from "../../lib/rendering/IRenderer";
import IDisplayObject from "../../lib/display/IDisplayObject";
describe("Animation test suite",
()=>{
    
    const data = document.createElement("canvas");
    const animation:Animation = new Animation();
    const texture:Texture = new Texture("texture",data);
    const fakeRenderer:IRenderer = {
        add: (child:IDisplayObject):void =>{},
        getChildren: ():IDisplayObject[] =>{ return []},
        clear: ():void =>{},
        draw: (canvas:HTMLCanvasElement, context:CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext):void =>{}
    }

    beforeEach(
        ()=>{
            data.width = data.height = 100; 
            animation.clearFrames();
            animation.loop = false;
        }
    )

    it("should be able to create an Animation instance",
    ()=>{
        expect(animation).toBeTruthy();
    }); 

    it("should be able to set and retrieve a texture for a specific frame",
    ()=>{
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        expect( animation.getFrameTexture(0) ).toBe(texture); 
        expect( animation.getFrameTexture(1) ).toBe(texture); 
        expect( animation.getFrameTexture(2) ).toBe(texture); 
    });

    it("should be able to remove a texture for a specific frame",
    ()=>{
        animation.setFrameTexture(1, texture);
        animation.removeFrameTexture(1);
        expect( animation.getFrameTexture(1) ).toBeNull();
    });

    it("should be able to give animation length based on last defined frame texture",
    ()=>{
        animation.setFrameTexture(9, texture);
        animation.setFrameTexture(10, texture);
        expect( animation.getAnimationLength() ).toEqual(11); // <-- cause it's based on 0
    });

    it("should be able to give last frame index based on last defined frame texture",
    ()=>{
        animation.setFrameTexture(9, texture);
        animation.setFrameTexture(10, texture);
        expect( animation.getLastFrameIndex() ).toEqual(10);
    });

    it("should returns null if frameindex is not good",
    ()=>{
        expect( animation.getFrameTexture(1) ).toBeNull(); 
    });

    it("should be able to clear all frames", 
    ()=>{
        animation.setFrameTexture(9, texture);
        animation.setFrameTexture(10, texture);
        animation.clearFrames();
        expect(animation.getAnimationLength()).toEqual(0);
    })

    it( "should returns the previous defined texture for a specific frame index", 
    ()=>{
        animation.setFrameTexture(1, texture);
        const result:Texture|null = animation.getPreviousDefinedFrameTexture(10);
        expect(result).toBe(texture);
    });

    it( "should return null if there's no previous defined frame texture", 
    ()=>{
        const result:Texture|null = animation.getPreviousDefinedFrameTexture(1);
        expect(result).toBeNull();
    });

    it( "should returns the next defined texture for a specific frame index", 
    ()=>{
        animation.setFrameTexture(10, texture);
        const result:Texture|null = animation.getNextDefinedFrameTexture(1);
        expect(result).toBe(texture);
    });

    it( "should return null if there's no next defined frame texture", 
    ()=>{
        const result:Texture|null = animation.getNextDefinedFrameTexture(10);
        expect(result).toBeNull();
    });


    it("should be able to go a specific frame", 
    ()=>{
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);
        animation.goToFrame(3);
        expect(animation.getCurrentFrameIndex()).toEqual(3);
    }); 

    it("should be able to return the current frame texture", 
    ()=>{
        const sub = texture.createSubTexture("sub",0,0,50,50);
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, sub);
        animation.setFrameTexture(4, texture);
        animation.goToFrame(3);
        expect(animation.getCurrentFrameTexture()).toBe(sub);
    }); 

    it("should return the previous texture if current is null and play forward", 
    ()=>{
        const sub = texture.createSubTexture("sub",0,0,50,50);
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, sub);
        animation.setFrameTexture(4, texture);
        animation.play();
        animation.goToFrame(3);
        expect(animation.getCurrentFrameTexture()).toBe(sub);
    })

    it("should be able to play an animation forward", 
    ()=>{        
        // given 
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);

        // when
        animation.play(); 
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);

        //then 
        expect(animation.getCurrentFrameIndex()).toEqual(4);

    });
    
    it("should be able to play an animation backward", 
    ()=>{        
        // given 
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);

        // when
        animation.goToFrame(4);
        animation.rewind(); 
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);

        //then 
        expect(animation.getCurrentFrameIndex()).toEqual(0);

    });

    it("should be able to stop an animation", 
    ()=>{        
        // given 
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);

        // when
        animation.goToFrame(4);
        animation.rewind(); 
        animation.render(fakeRenderer);

        animation.stop();
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);

        //then 
        expect(animation.getCurrentFrameIndex()).toEqual(3);
    });

    it("should be able to loop an animation", 
    ()=>{        
        // given 
        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);

        // when
        animation.loop = true;
        animation.play(); 
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);

        //then 
        expect(animation.getCurrentFrameIndex()).toEqual(0);
    });

    it("should be able to know if a specific frame is played", 
    ()=>{        
        // given 
        let currentFrame:number = 0; 
        const callback = ()=>{
            currentFrame = animation.getCurrentFrameIndex()
        };

        animation.setFrameTexture(0, texture);
        animation.setFrameTexture(1, texture);
        animation.setFrameTexture(2, texture);
        animation.setFrameTexture(3, texture);
        animation.setFrameTexture(4, texture);

        // when
        animation.loop = true;
        animation.play(); 
        animation.subscribe(AnimationEvent.PLAY_FRAME, callback);
        animation.render(fakeRenderer);
        animation.render(fakeRenderer);
        animation.unsubscribe(AnimationEvent.PLAY_FRAME, callback);

        //then 
        expect(currentFrame).toEqual(2);
    });

  
});