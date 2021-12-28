import DisplayObject from "../../lib/display/DisplayObject";
import DisplayObjectContainer from "../../lib/display/DisplayObjectContainer";
import Stage from "../../lib/display/Stage";
import {isDisplayObjectContainer, isWebGLAvailable} from "../../lib/utils/isser";

describe('isser test suite', 
     ()=>{

          describe('#isDisplayObjectContainer', 
          ()=>{
               [
                    {input: new Stage(), expected: true},
                    {input: new DisplayObjectContainer(), expected: true},
                    {input: new DisplayObject(), expected: false},
               ].forEach( 
                    (current)=>{
                         it(`should say if the object is a displayobjectcontainer or not for ${current.input}`,
                              ()=>{
                                   expect( isDisplayObjectContainer(current.input)).toEqual(current.expected);
                              }
                         );
                    }
               )
               
          });

          describe('#isWebGlAvailable', 
          ()=>{
               
               it(`should say if that webgl is not available`,
                    ()=>{
                         const stub = spyOn(HTMLCanvasElement.prototype, "getContext").and.returnValue(null);
                         const available = isWebGLAvailable();
                         expect(available).toBeFalse();
                    }
               );

               it(`should say if that webgl is available`,
                    ()=>{
                         const available = isWebGLAvailable();
                         expect(available).toBeTrue();
                    }
               );
               
          });
     }
)