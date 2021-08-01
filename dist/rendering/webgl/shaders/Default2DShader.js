"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Webgl2DRenderer_1 = require("../Webgl2DRenderer");
var Default2DShader = /** @class */ (function () {
    function Default2DShader(context) {
        this.id = 0;
        this.fragmentShader = null;
        this.vertexShader = null;
        this.program = null;
        this.projectionPointer = 0;
        this._init(context);
    }
    Default2DShader.prototype._init = function (context) {
        /*
        [a, b, 0,
        c, d, 0,
        tx, ty, 1]
        */
        var vertexPosAttribPointer = 0;
        var opacityPointer = 0;
        var uvsAttribPointer = 0;
        var worldMatrixPointer1 = 0;
        var worldMatrixPointer2 = 0;
        var samplerPointer = 0;
        var projectionPointer = 0;
        var stride = Webgl2DRenderer_1.VERTEX_SIZE * 4;
        // let stride = 0;
        this.fragmentShader = this._compile(context, this._getFragmentSource(), context.FRAGMENT_SHADER);
        this.vertexShader = this._compile(context, this._getVertexSource(), context.VERTEX_SHADER);
        if (this.program != null) {
            context.deleteProgram(this.program);
        }
        this.program = context.createProgram();
        context.attachShader(this.program, this.vertexShader); // attach vertexShader
        context.attachShader(this.program, this.fragmentShader); // attach fragmentShader
        context.linkProgram(this.program); // links program to webgl context
        //if the program is not linked...
        if (!context.getProgramParameter(this.program, context.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }
        context.useProgram(this.program); // use the shaderProgram
        opacityPointer = context.getAttribLocation(this.program, "worldOpacity");
        vertexPosAttribPointer = context.getAttribLocation(this.program, "vertexPos");
        uvsAttribPointer = context.getAttribLocation(this.program, "uvCoords");
        worldMatrixPointer1 = context.getAttribLocation(this.program, "wmat1");
        worldMatrixPointer2 = context.getAttribLocation(this.program, "wmat2");
        console.log(vertexPosAttribPointer, uvsAttribPointer, worldMatrixPointer1, worldMatrixPointer2);
        context.enableVertexAttribArray(opacityPointer);
        context.enableVertexAttribArray(vertexPosAttribPointer);
        context.enableVertexAttribArray(uvsAttribPointer);
        context.enableVertexAttribArray(worldMatrixPointer1);
        context.enableVertexAttribArray(worldMatrixPointer2);
        context.vertexAttribPointer(vertexPosAttribPointer, 2, context.FLOAT, false, stride, 0);
        context.vertexAttribPointer(uvsAttribPointer, 2, context.FLOAT, false, stride, 2 * 4);
        context.vertexAttribPointer(worldMatrixPointer1, 4, context.FLOAT, false, stride, 4 * 4);
        context.vertexAttribPointer(worldMatrixPointer2, 2, context.FLOAT, false, stride, 8 * 4);
        context.vertexAttribPointer(opacityPointer, 1, context.FLOAT, false, stride, 10 * 4);
        samplerPointer = context.getUniformLocation(this.program, "uSampler");
        projectionPointer = context.getUniformLocation(this.program, "uProjection");
        context.uniform1i(samplerPointer, 0);
        this.projectionPointer = projectionPointer;
    };
    Default2DShader.prototype.pushVerticesInto = function (children, vertexArray) {
        var pos = 0;
        for (var i = 0; i < children.length; i++) {
            var current = children[i];
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
    };
    Default2DShader.prototype._compile = function (context, source, type) {
        var shader = context.createShader(type);
        context.shaderSource(shader, source);
        context.compileShader(shader);
        if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            console.log(source + "*********" + context.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    };
    Default2DShader.prototype._getVertexSource = function () {
        return "\n\t\tattribute vec2 vertexPos;\n\t\tattribute vec2 uvCoords;\n\t\tattribute vec4 wmat1;\n\t\tattribute vec2 wmat2;\n\t\tattribute float worldOpacity;\n\t\tvarying vec4 vColor;\n\t\tvarying vec2 uvs;\n\t\tuniform vec2 uProjection;\n\t\tconst vec3 center = vec3(-1.0, 1.0, 0);\n\n\n\n\t\tvoid main(void) {\n\n\t\t\tmat3 worldMatrix = mat3(\n\t\t\t\tvec3(wmat1.x, wmat1.y, 0.0),\n\t\t\t\tvec3(wmat1.z, wmat1.a, 0.0),\n\t\t\t\tvec3(wmat2.x, wmat2.y, 1.0)\n\t\t\t);\n\n\t\t\tvec3 tmp = vec3( vertexPos, 0) * worldMatrix;\n\n\t\t\tgl_Position = vec4((tmp / vec3(uProjection,1)) + center, 1.0);\n\n\t\t\tuvs = uvCoords;\n\n\t\t\tvColor = vec4(1.0, 1.0, 1.0, worldOpacity);\n\n\t\t}\n        ";
    };
    ;
    Default2DShader.prototype._getFragmentSource = function () {
        return "\n\t\tprecision lowp float;\n\t\tvarying vec4 vColor;\n\t\tvarying vec2 uvs;\n\t\tuniform sampler2D uSampler;\n        \n\t\tvoid main(void) {\n            gl_FragColor = texture2D(uSampler,uvs) * vColor.a;\n\t\t}\n        ";
    };
    return Default2DShader;
}());
exports.default = Default2DShader;
