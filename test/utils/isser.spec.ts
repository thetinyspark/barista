import DisplayObject from "../../lib/display/DisplayObject";
import DisplayObjectContainer from "../../lib/display/DisplayObjectContainer";
import Stage from "../../lib/display/Stage";
import {isDisplayObjectContainer} from "../../lib/utils/isser";

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
     }
)