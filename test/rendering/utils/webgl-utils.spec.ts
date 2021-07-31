import DisplayObject from "../../../lib/display/DisplayObject";
import Texture from "../../../lib/texture/Texture";
import {batch, getNextPowerOf2, pushVerticesInto, createVertexArray, createIndexArray, MAX_QUAD_PER_CALL, VERTEX_ARRAY_SIZE} from "../../../lib/rendering/webgl/utils/utils";
import IDisplayObject from "../../../lib/display/IDisplayObject";
import { mat2d } from "gl-matrix";
import TextureData from "../../../lib/texture/TextureData";

describe('webgl utils test suite', 
     ()=>{

          describe('#batch', 
          ()=>{
               it('should return multiple displayobjects arrays, grouped by texture, and for a maximum of n displayobjects per texture ',
                    ()=>{
                         const children = []; 
                         const textures = [
                              new Texture("A", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                              new Texture("B", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                              new Texture("C", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                         ];

                         for( let i:number = 0; i < 10678; i++ ){
                              const object = new DisplayObject();
                              object.texture = textures[i%3];
                              children.push(object);
                         }

                         const result = batch(children);

                         result.forEach( 
                              (batch:IDisplayObject[])=>{
                                   const ids = batch.map( value => value.texture.textureUid ); 
                                   const uniqueIds = Array.from( new Set(ids) );
                                   expect(batch.length).toBeLessThanOrEqual(MAX_QUAD_PER_CALL); 
                                   expect(uniqueIds.length).toEqual(1);
                              }
                         );
                    }
               );
          });

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
                                   expect( getNextPowerOf2(current.input)).toEqual(current.expected);
                              }
                         );
                    }
               )
               
          });

          describe('#pushVerticesInto', 
          ()=>{
               it('should push vertices data into a vertexArray, vertices contains 4 points, each with x,y,opacity and worldMatrix data', 
               ()=>{
                    // given 
                    const numChildren = MAX_QUAD_PER_CALL;
                    const children = []; 
                    const worldmat = mat2d.create();
                    const vertexArray = createVertexArray();
                    const emptyArray = createVertexArray();

                    for( let i:number = 0; i < numChildren; i++ ){
                         const object = new DisplayObject();
                         object.rotation =Math.round(Math.random() * 90);
                         object.update(worldmat);
                         children.push(object);
                    }

                    // when 
                    pushVerticesInto(children, vertexArray);

                    // then 
                    expect(vertexArray).not.toEqual(emptyArray);
               });
          });

          describe('#createVertexArray', 
          ()=>{
               it('should create an empty vertexArray with the maximum size', 
               ()=>{
                    // when 
                    const result = createVertexArray();

                    // then 
                    expect(result.length).toEqual(VERTEX_ARRAY_SIZE);
               });
          });

          describe('#createIndexArray', 
          ()=>{
               it('should create an index Array with the good indices and a maximum of quads', 
               ()=>{
                    // given 
                    const expected = [  
                                        0,1,2,1,2,3,
                                        4,5,6,5,6,7,
                                        8,9,10,9,10,11
                                   ];

                    // when 
                    const result = createIndexArray();

                    // then 
                    expect(Array.from(result).splice(0,expected.length)).toEqual(expected);
               });
          });
     }
)