import DisplayObject from "../../../lib/display/DisplayObject";
import Texture from "../../../lib/texture/Texture";
import {batch, buildPowerOf2TextureData, getNextPowerOf2, buildWebGlTextureData, pushVerticesInto, createVertexArray, createIndexArray, VERTEX_SIZE, MAX_QUAD_PER_CALL, VERTEX_ARRAY_SIZE, WebGlTextureData} from "../../../lib/rendering/webgl/utils/utils";
import IDisplayObject from "../../../lib/display/IDisplayObject";
import { mat2d } from "gl-matrix";

describe('webgl utils test suite', 
     ()=>{

          describe('#batch', 
          ()=>{
               it('should return multiple displayobjects arrays, grouped by texture, and for a maximum of n displayobjects per texture ',
                    ()=>{
                         const children = []; 
                         const textures = [
                              new Texture("A", document.createElement("canvas"), 0, 0, 0, 0),
                              new Texture("B", document.createElement("canvas"), 0, 0, 0, 0),
                              new Texture("C", document.createElement("canvas"), 0, 0, 0, 0)
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
          
          describe('#buildPowerOf2TextureData', 
          ()=>{
               it('should transform data into one with length multiple of 2', 
               ()=>{
                    // given 
                    const data = document.createElement("canvas");
                    data.width = 800; 
                    data.height = 480;
                    const texture = new Texture("test", data, 0, 0, data.width, data.height);

                    // when 
                    const result = buildPowerOf2TextureData(texture); 

                    // then 
                    expect(result.width).toEqual(1024);
                    expect(result.height).toEqual(512);
               });
          });

          describe('#buildWebGlTextureData', 
          ()=>{
               it('should create a WebGlTextureData from Texture object', 
               ()=>{
                    // given 
                    const data = document.createElement("canvas");
                    const context = data.getContext("webgl");
                    
                    data.width = 800; 
                    data.height = 480;
                    const texture = new Texture("test", data, 0, 0, 256, 256);
                    const expected = {
                         topLeft: {u: 0, v: 1},
                         topRight: {u: 0.25, v: 1},
                         bottomLeft: {u: 0, v: 0.5},
                         bottomRight: {u: 0.25, v: 0.5},
                    };

                    // when 
                    const result:WebGlTextureData = buildWebGlTextureData(context, texture);

                    // then 
                    expect(result).not.toBeNull();
                    expect(result.uid).toEqual(texture.textureUid);
                    expect(result.topLeftUv).toEqual(expected.topLeft);
                    expect(result.topRightUv).toEqual(expected.topRight);
                    expect(result.bottomLeftUv).toEqual(expected.bottomLeft);
                    expect(result.bottomRightUv).toEqual(expected.bottomRight);
               });

               it('should create a unique glTexture based on Texture data uid', 
               ()=>{
                    // given 
                    const data = document.createElement("canvas");
                    const context = data.getContext("webgl");
                    
                    data.width = 800; 
                    data.height = 480;
                    const texture = new Texture("test2", data, 0, 0, 256, 256);

                    // when 
                    const result1:WebGlTextureData = buildWebGlTextureData(context, texture);
                    const result2:WebGlTextureData = buildWebGlTextureData(context, texture);

                    // then 
                    expect(result1.texture).toBe(result2.texture);
                    expect(result1.uid).toBe(result2.uid);
               });

               it('should create a unique WebGlTextureData based on Texture data id', 
               ()=>{
                    // given 
                    const data = document.createElement("canvas");
                    const context = data.getContext("webgl");
                    
                    data.width = 800; 
                    data.height = 480;
                    const texture = new Texture("test3", data, 0, 0, 256, 256);

                    // when 
                    const result1:WebGlTextureData = buildWebGlTextureData(context, texture);
                    const result2:WebGlTextureData = buildWebGlTextureData(context, texture);

                    // then 
                    expect(result1).toBe(result2);
               });
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