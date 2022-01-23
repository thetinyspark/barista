[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Webgl2DRenderer

# Class: Webgl2DRenderer

The Webgl2DRenderer class is the base class for WebGL2d rendering.

## Implements

- [`IRenderer`](../interfaces/IRenderer.md)

## Table of contents

### Constructors

- [constructor](Webgl2DRenderer.md#constructor)

### Properties

- [\_canvas](Webgl2DRenderer.md#_canvas)
- [\_children](Webgl2DRenderer.md#_children)
- [\_context](Webgl2DRenderer.md#_context)
- [\_currentShader](Webgl2DRenderer.md#_currentshader)
- [\_drawCalls](Webgl2DRenderer.md#_drawcalls)
- [\_indexArray](Webgl2DRenderer.md#_indexarray)
- [\_indexBuffer](Webgl2DRenderer.md#_indexbuffer)
- [\_vertexArray](Webgl2DRenderer.md#_vertexarray)
- [\_vertexBuffer](Webgl2DRenderer.md#_vertexbuffer)

### Methods

- [\_init](Webgl2DRenderer.md#_init)
- [add](Webgl2DRenderer.md#add)
- [batch](Webgl2DRenderer.md#batch)
- [clear](Webgl2DRenderer.md#clear)
- [draw](Webgl2DRenderer.md#draw)
- [getCanvas](Webgl2DRenderer.md#getcanvas)
- [getChildren](Webgl2DRenderer.md#getchildren)
- [getContext](Webgl2DRenderer.md#getcontext)
- [getNumDrawCalls](Webgl2DRenderer.md#getnumdrawcalls)

## Constructors

### constructor

• **new Webgl2DRenderer**()

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:24](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L24)

## Properties

### \_canvas

• `Private` **\_canvas**: `HTMLCanvasElement`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:15](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L15)

___

### \_children

• `Private` **\_children**: [`IDisplayObject`](../interfaces/IDisplayObject.md)[] = `[]`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:14](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L14)

___

### \_context

• `Private` **\_context**: `WebGLRenderingContext`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:16](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L16)

___

### \_currentShader

• `Private` **\_currentShader**: [`Default2DShader`](Default2DShader.md)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:21](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L21)

___

### \_drawCalls

• `Private` **\_drawCalls**: `number` = `0`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:22](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L22)

___

### \_indexArray

• `Private` **\_indexArray**: `Uint16Array`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:18](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L18)

___

### \_indexBuffer

• `Private` **\_indexBuffer**: `WebGLBuffer`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:20](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L20)

___

### \_vertexArray

• `Private` **\_vertexArray**: `Float32Array`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L17)

___

### \_vertexBuffer

• `Private` **\_vertexBuffer**: `WebGLBuffer`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:19](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L19)

## Methods

### \_init

▸ `Private` **_init**(): `void`

#### Returns

`void`

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:28](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L28)

___

### add

▸ **add**(`child`): `void`

Adds an IDisplayObject to the rendering pipeline

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[add](../interfaces/IRenderer.md#add)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:64](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L64)

___

### batch

▸ **batch**(`children`): [`BatchTexture`](BatchTexture.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`IDisplayObject`](../interfaces/IDisplayObject.md)[] |

#### Returns

[`BatchTexture`](BatchTexture.md)[]

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:131](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L131)

___

### clear

▸ **clear**(): `void`

Clears the current rendering pipeline

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[clear](../interfaces/IRenderer.md#clear)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:84](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L84)

___

### draw

▸ **draw**(`canvas`, `context`): `void`

Draws the current rendering pipeline (sets of IDisplayObjects)
into the specified canvas, with the specified rendering context

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `context` | `WebGLRenderingContext` |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[draw](../interfaces/IRenderer.md#draw)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:88](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L88)

___

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

The current renderer's canvas instance

#### Returns

`HTMLCanvasElement`

HTMLCanvasElement

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[getCanvas](../interfaces/IRenderer.md#getcanvas)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:72](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L72)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](../interfaces/IDisplayObject.md)[]

Returns the current rendering pipeline

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)[]

IDisplayObject[]

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[getChildren](../interfaces/IRenderer.md#getchildren)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:80](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L80)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

The current rendering context

#### Returns

`CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[getContext](../interfaces/IRenderer.md#getcontext)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:76](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L76)

___

### getNumDrawCalls

▸ **getNumDrawCalls**(): `number`

Get the number of draw calls

#### Returns

`number`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[getNumDrawCalls](../interfaces/IRenderer.md#getnumdrawcalls)

#### Defined in

[lib/core/rendering/webgl/Webgl2DRenderer.ts:68](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Webgl2DRenderer.ts#L68)
