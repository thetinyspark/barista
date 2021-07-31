import IDisplayObject from "../../../display/IDisplayObject";

export type WebGlTextureData = {
    topLeftUv:{u:number, v:number}, 
    topRightUv:{u:number, v:number}, 
    bottomLeftUv:{u:number, v:number}, 
    bottomRightUv:{u:number, v:number}, 
    texture:WebGLTexture, 
    uid:string
};

export const VERTEX_SIZE:number = 9;
export const NUM_VERTICES_PER_QUAD:number = 4; 
export const MAX_QUAD_PER_CALL:number = Math.floor( 65535 / VERTEX_SIZE / NUM_VERTICES_PER_QUAD );
export const VERTEX_ARRAY_SIZE:number = MAX_QUAD_PER_CALL * NUM_VERTICES_PER_QUAD * VERTEX_SIZE;
export const INDICES_PER_QUAD:number = 6;

export function batch(children:IDisplayObject[]):IDisplayObject[][]{
    children.sort( 
        (a, b)=>{
            return a.texture.textureUid < b.texture.textureUid ? -1 : 1;
        }
    ); 

    const result = []; 
    let batch = [];
    let texId:string = "";
    
    for( let i:number = 0; i < children.length; i++ ){
        if( children[i].texture.textureUid !== texId || i%MAX_QUAD_PER_CALL === 0 ){
            batch = [];
            result.push(batch);
            texId = children[i].texture.textureUid;
        }

        batch.push(children[i]);
    }

    return result;
}

export function pushVerticesInto(children:IDisplayObject[], vertexArray:Float32Array):void{
    let pos:number = 0;
    for( let i:number = 0; i < children.length; i++ ){
        const current = children[i];

        // topleft
        vertexArray[pos++] = 0;
        vertexArray[pos++] = 0;
        vertexArray[pos++] = current.worldOpacity;
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty

        // topright
        vertexArray[pos++] = current.width;
        vertexArray[pos++] = 0;
        vertexArray[pos++] = current.worldOpacity;
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty

        // bottomleft
        vertexArray[pos++] = 0;
        vertexArray[pos++] = current.height;
        vertexArray[pos++] = current.worldOpacity;
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty

        // bottomright
        vertexArray[pos++] = current.width;
        vertexArray[pos++] = current.height;
        vertexArray[pos++] = current.worldOpacity;
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
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

export function getNextPowerOf2(value:number):number{
    let num = 1;
    while( num < value ){
        num *= 2;
    }
    
    return num;
}
