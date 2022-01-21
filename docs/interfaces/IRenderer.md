---
title: "Interface: IRenderer"
linkTitle: "IRenderer"
slug: "IRenderer"
---

The IRenderer interface defines the main functionnalities a renderer needs.

## Implemented by

- [`Canvas2DRenderer`](../classes/Canvas2DRenderer.md)
- [`Webgl2DRenderer`](../classes/Webgl2DRenderer.md)

## Table of contents

### Methods

- [add](IRenderer.md#add)
- [clear](IRenderer.md#clear)
- [draw](IRenderer.md#draw)
- [getCanvas](IRenderer.md#getcanvas)
- [getChildren](IRenderer.md#getchildren)
- [getContext](IRenderer.md#getcontext)
- [getNumDrawCalls](IRenderer.md#getnumdrawcalls)

## Methods

### add

▸ **add**(`child`): `void`

Adds an IDisplayObject to the rendering pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) | IDisplayObject |

#### Returns

`void`

#### Defined in

[lib/core/rendering/IRenderer.ts:10](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L10)

___

### clear

▸ **clear**(): `void`

Clears the current rendering pipeline

#### Returns

`void`

#### Defined in

[lib/core/rendering/IRenderer.ts:21](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L21)

___

### draw

▸ **draw**(`canvas`, `context`): `void`

Draws the current rendering pipeline (sets of IDisplayObjects)
into the specified canvas, with the specified rendering context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | HTMLCanvasElement |
| `context` | `CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext` | CanvasRenderingContext2D\|WebGLRenderingContext\|WebGL2RenderingContext |

#### Returns

`void`

#### Defined in

[lib/core/rendering/IRenderer.ts:41](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L41)

___

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

The current renderer's canvas instance

#### Returns

`HTMLCanvasElement`

HTMLCanvasElement

#### Defined in

[lib/core/rendering/IRenderer.ts:33](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L33)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](IDisplayObject.md)[]

Returns the current rendering pipeline

#### Returns

[`IDisplayObject`](IDisplayObject.md)[]

IDisplayObject[]

#### Defined in

[lib/core/rendering/IRenderer.ts:16](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L16)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

The current rendering context

#### Returns

`CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext

#### Defined in

[lib/core/rendering/IRenderer.ts:27](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L27)

___

### getNumDrawCalls

▸ **getNumDrawCalls**(): `number`

Get the number of draw calls

#### Returns

`number`

#### Defined in

[lib/core/rendering/IRenderer.ts:46](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/IRenderer.ts#L46)
