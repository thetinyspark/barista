import Stage from "../../lib/display/Stage";
describe( 
    'Bitmap test suite', 
    ()=>{
        describe("constructor and structure", 
            ()=>{
                it( 'should be able to instanciate a Stage object', 
                    ()=>{
                        const stage = new Stage();
                        expect(stage).toBeTruthy();
                    }
                ); 

                it( 'should be able to  get canvas and get context', 
                    ()=>{
                        const stage = new Stage();
                        expect(stage.getCanvas()).toBeInstanceOf(HTMLCanvasElement);
                        expect(stage.getContext()).toBeInstanceOf(CanvasRenderingContext2D);
                    }
                ); 


                it( 'should be able to play next frame',
                    ()=>{
                        const stage = new Stage();

                        stage.nextFrame();
                        expect(stage.getCurrentFrame()).toEqual(1);

                        stage.nextFrame();
                        expect(stage.getCurrentFrame()).toEqual(2);
                    }
                );
            }
        );
    }
)