import IDisplayObject from "../../display/IDisplayObject";

export const VERTEX_SIZE:number = 11;
export const NUM_VERTICES_PER_QUAD:number = 4; 
export const MAX_QUAD_PER_CALL:number = Math.floor( 65535 / VERTEX_SIZE / NUM_VERTICES_PER_QUAD );
export const VERTEX_ARRAY_SIZE:number = MAX_QUAD_PER_CALL * NUM_VERTICES_PER_QUAD * VERTEX_SIZE;
export const INDICES_PER_QUAD:number = 6;

export function pushVerticesInto(children:IDisplayObject[], vertexArray:Float32Array):void{
    let pos:number = 0;
    for( let i:number = 0; i < children.length; i++ ){
        const current = children[i];

        // topleft
        vertexArray[pos++] = 0; // x
        vertexArray[pos++] = 0; // y
        vertexArray[pos++] = current.texture.topLeftUv.u; // u
        vertexArray[pos++] = current.texture.topLeftUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity

        // topright
        vertexArray[pos++] = current.width; // x
        vertexArray[pos++] = 0; // y
        vertexArray[pos++] = current.texture.topRightUv.u; // u
        vertexArray[pos++] = current.texture.topRightUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; //  opacity

        // bottomleft
        vertexArray[pos++] = 0; // x
        vertexArray[pos++] = current.height; // y
        vertexArray[pos++] = current.texture.bottomLeftUv.u; // u
        vertexArray[pos++] = current.texture.bottomLeftUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity

        // bottomright
        vertexArray[pos++] = current.width; // x
        vertexArray[pos++] = current.height; // y
        vertexArray[pos++] = current.texture.bottomRightUv.u; // u
        vertexArray[pos++] = current.texture.bottomRightUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity
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

export default class WebGlConfig{
    public static VERTEX_SIZE:number            = VERTEX_SIZE;
    public static NUM_VERTICES_PER_QUAD:number  = NUM_VERTICES_PER_QUAD;
    public static MAX_QUAD_PER_CALL:number      = MAX_QUAD_PER_CALL;
    public static VERTEX_ARRAY_SIZE:number      = VERTEX_ARRAY_SIZE;
    public static INDICES_PER_QUAD:number       = INDICES_PER_QUAD;
    public static pushVerticesInto:Function     = pushVerticesInto;
    public static createVertexArray:Function    = createVertexArray;
    public static createIndexArray:Function     = createIndexArray;
}