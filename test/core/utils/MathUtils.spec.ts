import MathUtils from "../../../lib/core/utils/MathUtils";

describe('webgl utils test suite', 
     ()=>{

          describe('#getNextPowerOf2', 
          ()=>{
               [
                    {input: 0, expected: 1},
                    {input: 1, expected: 1},
                    {input: 2, expected: 2},
                    {input: 3, expected: 4},
                    {input: 800, expected: 1024},
               ].forEach( 
                    (current)=>{
                         it(`should return the next power of 2 greater than or equal ${current.input}`,
                              ()=>{
                                   expect( MathUtils.getNextPowerOf2(current.input)).toEqual(current.expected);
                              }
                         );
                    }
               )
               
          });
     }
)