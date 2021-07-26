export default class Default2DShader{

    public id 					                    = 0;
	public fragmentShader:WebGLShader|null 	        = null;
	public vertexShader:WebGLShader|null            = null;
	public program:WebGLProgram|null 			    = null;
	public projectionPointer:WebGLUniformLocation 	= 0;
	public static VERTEX_SIZE:number                = 6;

	constructor(context:WebGLRenderingContext){
		this._init(context);
	}

    private _init(context:WebGLRenderingContext):void{
		
		/*
		let vertexPosAttribPointer:number = 0;
		let colorAttribPointer:number = 0;
		let uvsAttribPointer:number = 0;
		let samplerPointer:WebGLUniformLocation = 0;
		let projectionPointer:WebGLUniformLocation = 0;
		let stride = Default2DShader.VERTEX_SIZE * 4;
		
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
		{
			alert("Could not initialise shaders");
		}
	
		context.useProgram(this.program); // use the shaderProgram
		
		
		vertexPosAttribPointer = context.getAttribLocation(this.program, "aVertexPosition"); 
		colorAttribPointer = context.getAttribLocation(this.program, "aColor"); 
		uvsAttribPointer = context.getAttribLocation(this.program, "aTextureCoord"); 
		context.enableVertexAttribArray(vertexPosAttribPointer);
		context.enableVertexAttribArray(colorAttribPointer);
		context.enableVertexAttribArray(uvsAttribPointer);
		
		
		context.vertexAttribPointer(vertexPosAttribPointer, 2, context.FLOAT, false, stride, 0);
		context.vertexAttribPointer(colorAttribPointer, 2, context.FLOAT, false, stride, 2*4);
		context.vertexAttribPointer(uvsAttribPointer, 2, context.FLOAT, false, stride, 4*4);
		
		samplerPointer = context.getUniformLocation(this.program,"uSampler");
		projectionPointer = context.getUniformLocation(this.program,"uProjection");
		context.uniform1i(samplerPointer, 0);
		
		this.projectionPointer = projectionPointer;
		*/
    }

    private _compile(context:WebGLRenderingContext, source:string, type:number):WebGLShader{
		
        const shader = context.createShader(type);
	
		context.shaderSource(shader, source);
		context.compileShader(shader);

		if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) 
		{
			alert(context.getShaderInfoLog(shader));
			return null;
		}

		return shader;

    }

    private _getVertexSource()
	{
		return `
		attribute vec2 aVertexPosition;
		attribute vec2 aColor;
		attribute vec2 aTextureCoord;
		varying vec4 vColor;
		varying vec2 vTextureCoord;
		uniform vec2 uProjection;
		const vec2 center = vec2(-1.0, 1.0);
		
		
		void main(void) {
			gl_Position = vec4( ( aVertexPosition / uProjection) + center , 0.0, 1.0);
			vTextureCoord = aTextureCoord;
			vec3 color = mod(vec3(aColor.x/65536.0, aColor.x/256.0, aColor.x), 256.0) / 256.0;
			vColor = vec4( color * aColor.y, aColor.y );
		};
        `
	};

    private _getFragmentSource(){
        
		return `
		precision lowp float;
		varying vec4 vColor;
		varying vec2 vTextureCoord;
		uniform sampler2D uSampler;
        
		void main(void) {
            gl_FragColor = texture2D(uSampler,vTextureCoord) * vColor.a;
		};
        `;
    }
}