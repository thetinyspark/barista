import IDisplayObject from "../../../display/IDisplayObject";
export default class Default2DShader {
    id: number;
    fragmentShader: WebGLShader | null;
    vertexShader: WebGLShader | null;
    program: WebGLProgram | null;
    projectionPointer: WebGLUniformLocation;
    constructor(context: WebGLRenderingContext);
    private _init;
    pushVerticesInto(children: IDisplayObject[], vertexArray: Float32Array): void;
    private _compile;
    private _getVertexSource;
    private _getFragmentSource;
}
