export default class Default2DShader {
    id: number;
    fragmentShader: WebGLShader | null;
    vertexShader: WebGLShader | null;
    program: WebGLProgram | null;
    projectionPointer: WebGLUniformLocation;
    constructor(context: WebGLRenderingContext);
    private _init;
    private _compile;
    private _getVertexSource;
    private _getFragmentSource;
}
