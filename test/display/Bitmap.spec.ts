import Bitmap from "../../lib/display/Bitmap";

describe( 
    'Bitmap test suite', 
    ()=>{
        describe("constructor and structure", 
            ()=>{
                it( 'should be able to instanciate a Bitmap', 
                    ()=>{
                        const object = new Bitmap();
                        expect(object).toBeTruthy();
                    }
                ); 

                it( "should be able to set/get texture", 
                    ()=>{
                        const image:HTMLImageElement = document.createElement("img");
                        const object = new Bitmap();
                        expect(object.texture).toBeNull();

                        object.texture = image;
                        expect(object.texture).toBe(image);
                    }
                );

                it( "should draw the texture on the context", 
                    ()=>{
                        // given 
                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        const image:HTMLImageElement = document.createElement("img");
                        const object = new Bitmap();
                        object.texture = image;
                        const spy = spyOn(context, "drawImage");

                        // when 
                        object.render(context);

                        //then 
                        expect(spy).toHaveBeenCalledOnceWith(
                            object.texture, 
                            0,
                            0,
                            object.texture.width,
                            object.texture.height,
                            0,
                            0,
                            object.width, 
                            object.height
                        );
                    }
                );
            }
        );
    }
)