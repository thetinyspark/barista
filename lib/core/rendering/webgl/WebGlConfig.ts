import { mat2d } from "gl-matrix";
import IDisplayObject from "../../display/IDisplayObject";
import { Texture } from "../../texture";
import { CanvasUtils } from "../../utils";
function getGlParam(param:string){
    const ctx = CanvasUtils.create().getContext("webgl");
    return ctx.getParameter(ctx[param]);
}


export const VERTEX_SIZE:number = 12;
export const INDICES_PER_QUAD:number = 6;
export const NUM_VERTICES_PER_QUAD:number = 4; 
export const MAX_TEXTURES_UNITS:number = getGlParam('MAX_TEXTURE_IMAGE_UNITS');
// export const MAX_QUAD_PER_CALL:number = Math.floor( 65535 * 8 / VERTEX_SIZE / NUM_VERTICES_PER_QUAD );
export const MAX_QUAD_PER_CALL:number = Math.floor( 65535 / INDICES_PER_QUAD );
export const VERTEX_ARRAY_SIZE:number = MAX_QUAD_PER_CALL * NUM_VERTICES_PER_QUAD * VERTEX_SIZE;

export function pushVerticesInto(children:IDisplayObject[], vertexArray:Float32Array):void{
    let pos:number = 0;
    let wmat:mat2d = null;
    let w0:number = 0;
    let w1:number = 0;
    let w2:number = 0;
    let w3:number = 0;
    let w4:number = 0;
    let w5:number = 0;
    let textureIndex:number = 0;
    let current:IDisplayObject = null;
    let width:number = 0;
    let height:number = 0;
    let tex:Texture = null;
    let opacity:number = 0;
    for( let i:number = 0; i < children.length; i++ ){
        current = children[i];
        textureIndex = current.texture.data.texturePos;
        wmat = current.worldMatrix;
        width = current.width;
        height = current.height;
        tex = current.texture;
        opacity = current.worldOpacity;
        w0 = wmat[0];
        w1 = wmat[1];
        w2 = wmat[2];
        w3 = wmat[3];
        w4 = wmat[4];
        w5 = wmat[5];

        
        // topleft
        vertexArray[pos+0] = 0; // x
        vertexArray[pos+1] = 0; // y
        vertexArray[pos+2] = tex.topLeftUv.u; // u
        vertexArray[pos+3] = tex.topLeftUv.v; // v
        vertexArray[pos+4] = w0; // a
        vertexArray[pos+5] = w1; // a
        vertexArray[pos+6] = w2; // a
        vertexArray[pos+7] = w3; // a
        vertexArray[pos+8] = w4; // a
        vertexArray[pos+9] = w5; // a
        vertexArray[pos+10] = opacity; // opacity
        vertexArray[pos+11] = textureIndex; // textureIndex

        // topright
        vertexArray[pos+12] = width; // x
        vertexArray[pos+13] = 0; // y
        vertexArray[pos+14] = tex.topRightUv.u; // u
        vertexArray[pos+15] = tex.topRightUv.v; // v
        vertexArray[pos+16] = w0; // a
        vertexArray[pos+17] = w1; // a
        vertexArray[pos+18] = w2; // a
        vertexArray[pos+19] = w3; // a
        vertexArray[pos+20] = w4; // a
        vertexArray[pos+21] = w5; // a
        vertexArray[pos+22] = opacity; //  opacity
        vertexArray[pos+23] = textureIndex; // textureIndex

        // bottomleft
        vertexArray[pos+24] = 0; // x
        vertexArray[pos+25] = height; // y
        vertexArray[pos+26] = tex.bottomLeftUv.u; // u
        vertexArray[pos+27] = tex.bottomLeftUv.v; // v
        vertexArray[pos+28] = w0; // a
        vertexArray[pos+29] = w1; // a
        vertexArray[pos+30] = w2; // a
        vertexArray[pos+31] = w3; // a
        vertexArray[pos+32] = w4; // a
        vertexArray[pos+33] = w5; // a
        vertexArray[pos+34] = opacity; // opacity
        vertexArray[pos+35] = textureIndex; // textureIndex

        // bottomright
        vertexArray[pos+36] = width; // x
        vertexArray[pos+37] = height; // y
        vertexArray[pos+38] = tex.bottomRightUv.u; // u
        vertexArray[pos+39] = tex.bottomRightUv.v; // v
        vertexArray[pos+40] = w0; // a
        vertexArray[pos+41] = w1; // a
        vertexArray[pos+42] = w2; // a
        vertexArray[pos+43] = w3; // a
        vertexArray[pos+44] = w4; // a
        vertexArray[pos+45] = w5; // a
        vertexArray[pos+46] = opacity; // opacity
        vertexArray[pos+47] = textureIndex; // textureIndex
        pos += 48;
    }
}

export function createVertexArray():Float32Array{
    return new Float32Array(MAX_QUAD_PER_CALL * VERTEX_SIZE * NUM_VERTICES_PER_QUAD);
}

export function createIndexArray():Uint16Array{
    const size:number = MAX_QUAD_PER_CALL * INDICES_PER_QUAD;
    const indexArray = new Uint16Array(size);
    let vertexPos:number = 0;

    for( let i:number = 0; i < size; i+=INDICES_PER_QUAD){
        indexArray[i+0] = vertexPos+0;
        indexArray[i+1] = vertexPos+1;
        indexArray[i+2] = vertexPos+2;
        indexArray[i+3] = vertexPos+1;
        indexArray[i+4] = vertexPos+2;
        indexArray[i+5] = vertexPos+3;
        vertexPos += NUM_VERTICES_PER_QUAD;
    }
    return indexArray;
}

/**
 * The WebGlConfig is a set of values which are necessary
 * for the WebGL2DRenderer. You can changes the values if 
 * you want to optimize the rendering process. The default 
 * configuration stands that indices array has a max length
 * of 65536 (2 words) which is an old limitation.
 */
export default class WebGlConfig{
    public static VERTEX_SIZE:number            = VERTEX_SIZE;
    public static NUM_VERTICES_PER_QUAD:number  = NUM_VERTICES_PER_QUAD;
    public static MAX_TEXTURES_UNITS:number     = MAX_TEXTURES_UNITS;
    public static MAX_QUAD_PER_CALL:number      = MAX_QUAD_PER_CALL;
    public static VERTEX_ARRAY_SIZE:number      = VERTEX_ARRAY_SIZE;
    public static INDICES_PER_QUAD:number       = INDICES_PER_QUAD;
    public static pushVerticesInto:Function     = pushVerticesInto;
    public static createVertexArray:Function    = createVertexArray;
    public static createIndexArray:Function     = createIndexArray;
}