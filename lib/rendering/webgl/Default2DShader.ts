import WebGlConfig from "./WebGlConfig";

export default class Default2DShader{

    public id 					                    = 0;
	public fragmentShader:WebGLShader|null 	        = null;
	public vertexShader:WebGLShader|null            = null;
	public program:WebGLProgram|null 			    = null;
	public projectionPointer:WebGLUniformLocation 	= 0;

	constructor(context:WebGLRenderingContext){
		this._init(context);
	}

    private _init(context:WebGLRenderingContext):void{
		/*
		[a, b, 0,
		c, d, 0,
		tx, ty, 1]
		*/
		
		let vertexPosAttribPointer:number = 0;
		let opacityPointer:number = 0;
		let uvsAttribPointer:number = 0;
		let worldMatrixPointer1:number = 0;
		let worldMatrixPointer2:number = 0;
		let samplerPointer:WebGLUniformLocation = 0;
		let projectionPointer:WebGLUniformLocation = 0;
		let stride = WebGlConfig.VERTEX_SIZE * 4;
		// let stride = 0;
		
		this.fragmentShader = this._compile(context, this._getFragmentSource(), context.FRAGMENT_SHADER );
		this.vertexShader = this._compile(context, this._getVertexSource(), context.VERTEX_SHADER );
		
		if( this.program != null )
		{
			context.deleteProgram( this.program );
		}
		
		this.program = context.createProgram();
		
		context.attachShader(this.program, this.vertexShader); // attach vertexShader
		context.attachShader(this.program, this.fragmentShader); // attach fragmentShader
		context.linkProgram(this.program); // links program to webgl context
		
		
		//if the program is not linked...
		if (!context.getProgramParameter(this.program, context.LINK_STATUS)) 
			throw new Error("Could not initialise shaders");
	
		context.useProgram(this.program); // use the shaderProgram
		
		
		opacityPointer = context.getAttribLocation(this.program, "worldOpacity"); 
		vertexPosAttribPointer = context.getAttribLocation(this.program, "vertexPos"); 
		uvsAttribPointer = context.getAttribLocation(this.program, "uvCoords"); 
		worldMatrixPointer1 = context.getAttribLocation(this.program, "wmat1"); 
		worldMatrixPointer2 = context.getAttribLocation(this.program, "wmat2"); 

		context.enableVertexAttribArray(opacityPointer);
		context.enableVertexAttribArray(vertexPosAttribPointer);
		context.enableVertexAttribArray(uvsAttribPointer);
		context.enableVertexAttribArray(worldMatrixPointer1);
		context.enableVertexAttribArray(worldMatrixPointer2);
		
		
		context.vertexAttribPointer(vertexPosAttribPointer, 2, context.FLOAT, false, stride, 0);
		context.vertexAttribPointer(uvsAttribPointer, 2, context.FLOAT, false, stride, 2*4);
		context.vertexAttribPointer(worldMatrixPointer1, 4, context.FLOAT, false, stride, 4*4);
		context.vertexAttribPointer(worldMatrixPointer2, 2, context.FLOAT, false, stride, 8*4);
		context.vertexAttribPointer(opacityPointer, 1, context.FLOAT, false, stride, 10*4);
		
		samplerPointer = context.getUniformLocation(this.program,"uSampler");
		projectionPointer = context.getUniformLocation(this.program,"uProjection");
		context.uniform1i(samplerPointer, 0);
		
		this.projectionPointer = projectionPointer;
		
    }

    private _compile(context:WebGLRenderingContext, source:string, type:number):WebGLShader{
		
        const shader = context.createShader(type);
	
		context.shaderSource(shader, source);
		context.compileShader(shader);

		if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) 
			throw new Error( source + "*********" + context.getShaderInfoLog(shader));

		return shader;

    }

    private _getVertexSource()
	{
		return `
		attribute vec2 vertexPos;
		attribute vec2 uvCoords;
		attribute vec4 wmat1;
		attribute vec2 wmat2;
		attribute float worldOpacity;
		varying vec4 vColor;
		varying vec2 uvs;
		uniform vec2 uProjection;
		const vec3 center = vec3(-1.0, 1.0, 0);



		void main(void) {

			mat3 worldMatrix = mat3(
				vec3(wmat1.x, wmat1.y, 0.0),
				vec3(wmat1.z, wmat1.a, 0.0),
				vec3(wmat2.x, wmat2.y, 1.0)
			);

			vec3 tmp = vec3( vertexPos, 0) * worldMatrix;

			gl_Position = vec4((tmp / vec3(uProjection,1)) + center, 1.0);

			uvs = uvCoords;

			vColor = vec4(1.0, 1.0, 1.0, worldOpacity);

		}
        `
	};

    private _getFragmentSource(){
        
		return `
		precision lowp float;
		varying vec4 vColor;
		varying vec2 uvs;
		uniform sampler2D uSampler;
        
		void main(void) {
            gl_FragColor = texture2D(uSampler,uvs) * vColor.a;
		}
        `;
    }
}