import Animation, {AnimationEvent} from "../../../lib/core/display/Animation";
import Texture from "../../../lib/core/texture/Texture";
import IRenderer from "../../../lib/core/rendering/IRenderer";
import TextureData from "../../../lib/core/texture/TextureData";
import Canvas2DRenderer from "../../../lib/core/rendering/canvas/Canvas2DRenderer";
import AnimationFrameData from "../../../lib/core/display/AnimationFrameData";
describe("Animation test suite",
()=>{
    
    const data = document.createElement("canvas");
    const animation:Animation = new Animation();
    const texture:Texture = new Texture("texture", new TextureData(data) );
    const fakeRenderer:IRenderer = new Canvas2DRenderer();
    const frame1:AnimationFrameData = {
        name: "first", 
        index: 0, 
        width: 100, 
        height: 100, 
        offsetX: 100, 
        offsetY: 100,
        originalWidth: 100,
        originalHeight: 100,
        texture: null
    };

    const frame2:AnimationFrameData = {
        name: "second", 
        index: 0, 
        width: 100, 
        height: 100, 
        offsetX: 100, 
        offsetY: 100,
        originalWidth: 100,
        originalHeight: 100,
        texture: null
    };

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

    it("should be able to set and retrieve an AnimationFrameData for a specific frame",
    ()=>{
        // given

        // when
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(10, frame2);

        // then
        expect( animation.getFrameAt(0) ).toBe(frame1); 
        expect( animation.getFrameAt(10) ).toBe(frame2); 
        expect( animation.getFrameAt(5) ).toBeNull(); 
        expect( frame1.index ).toEqual(0);
        expect( frame2.index ).toEqual(10);
    });
    
    it("should be able to remove an AnimationFrameData for a specific frame",
    ()=>{
        animation.setFrameAt(1, frame1);
        animation.removeFrameAt(1);
        expect( animation.getFrameAt(1) ).toBeNull();
    });

    it("should be able to give animation length based on last defined frame",
    ()=>{
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(20, frame2);
        expect( animation.getAnimationLength() ).toEqual(21); // <-- cause it's based on 0
    });

    it("should be able to give last frame index based on last defined frame",
    ()=>{
        animation.setFrameAt(9, frame1);
        animation.setFrameAt(10, frame2);
        expect( animation.getLastFrameIndex() ).toEqual(10);
    });

    it("should be able to clear all frames", 
    ()=>{
        animation.setFrameAt(9, frame1);
        animation.setFrameAt(10, frame2);
        animation.clearFrames();
        expect(animation.getAnimationLength()).toEqual(0);
    }); 

    it( "should returns the previous defined framedata for a specific frame index", 
    ()=>{
        animation.setFrameAt(1, frame1);
        const result:AnimationFrameData|null = animation.getPreviousDefinedFrameAt(10);
        expect(result).toBe(frame1);
    });

    it( "should return null if there's no previous defined frame data", 
    ()=>{
        const result:AnimationFrameData|null = animation.getPreviousDefinedFrameAt(1);
        expect(result).toBeNull();
    });

    it( "should returns the next defined frame for a specific frame index", 
    ()=>{
        animation.setFrameAt(10, frame1);
        const result:AnimationFrameData|null = animation.getNextDefinedFrameAt(1);
        expect(result).toBe(frame1);
    });

    it( "should return null if there's no next defined frame", 
    ()=>{
        const result:AnimationFrameData|null = animation.getNextDefinedFrameAt(10);
        expect(result).toBeNull();
    });

    it("should be able to return the current frame data", 
    ()=>{
        const sub = texture.createSubTexture("sub",0,0,50,50);
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame2);
        animation.setFrameAt(4, frame1);
        animation.goToFrame(3);
        expect(animation.getCurrentFrame()).toBe(frame2);
    }); 


    it("should returns null if frameindex is not good",
    ()=>{
        expect( animation.getFrameAt(1) ).toBeNull(); 
    });

    it("should be able to go a specific frame", 
    ()=>{
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);
        animation.goToFrame(3);
        expect(animation.getCurrentFrameIndex()).toEqual(3);
    }); 

    it("should return the previous framedata if current is null and play forward", 
    ()=>{
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame2);
        animation.setFrameAt(4, frame1);
        animation.play();
        animation.goToFrame(3);
        expect(animation.getCurrentFrame()).toBe(frame2);
    })

    it("should be able to play an animation forward", 
    ()=>{        
        // given 
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);

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
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);

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
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);

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
        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);

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

        animation.setFrameAt(0, frame1);
        animation.setFrameAt(1, frame1);
        animation.setFrameAt(2, frame1);
        animation.setFrameAt(3, frame1);
        animation.setFrameAt(4, frame1);

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

    it("should be able to create an animation from a set of textures and frames", 
    ()=>{
        // given
        const texture1 = texture;
        const texture2 = texture1.createSubTexture("sub",0,0,texture1.sw >> 1, texture1.sh >> 1);
        const desc = [
            {frame:0, texture: texture1},
            {frame:10, texture: texture2},
        ]; 

        // when 
        const anim = Animation.createFromTexturesAndFrames(desc);

        // then
        expect(anim).toBeTruthy();
        desc.forEach(
            (frameconfig)=>{
                expect(anim.getFrameAt(frameconfig.frame)?.texture).toBe(frameconfig.texture);
            }
        );
    });

  
});