/**
 * The Default2DShader class is the base class for WebGL 2d rendering.
 * It is used by the WebGL2DRenderer class. This class provides a dynamic
 * basic fragment shader which adapts itself to the number of maximum
 * texture units.
 */
export default class Default2DShader {
    /**
     * The shader's id
     */
    id: number;
    fragmentShader: WebGLShader | null;
    vertexShader: WebGLShader | null;
    program: WebGLProgram | null;
    /**
     * The projection pointer is used to set the center of the world
     */
    projectionPointer: WebGLUniformLocation;
    constructor(context: WebGLRenderingContext);
    private _init;
    private _compile;
    private _getVertexSource;
    private _getFragmentSource;
}
