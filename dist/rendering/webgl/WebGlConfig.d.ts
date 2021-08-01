import IDisplayObject from "../../display/IDisplayObject";
export declare const VERTEX_SIZE: number;
export declare const NUM_VERTICES_PER_QUAD: number;
export declare const MAX_QUAD_PER_CALL: number;
export declare const VERTEX_ARRAY_SIZE: number;
export declare const INDICES_PER_QUAD: number;
export declare function pushVerticesInto(children: IDisplayObject[], vertexArray: Float32Array): void;
export declare function createVertexArray(): Float32Array;
export declare function createIndexArray(): Uint16Array;
export default class WebGlConfig {
    static VERTEX_SIZE: number;
    static NUM_VERTICES_PER_QUAD: number;
    static MAX_QUAD_PER_CALL: number;
    static VERTEX_ARRAY_SIZE: number;
    static INDICES_PER_QUAD: number;
    static pushVerticesInto: Function;
    static createVertexArray: Function;
    static createIndexArray: Function;
}
