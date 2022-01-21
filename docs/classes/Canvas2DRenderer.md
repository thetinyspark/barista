---
title: "Class: Canvas2DRenderer"
linkTitle: "Canvas2DRenderer"
slug: "Canvas2DRenderer"
---

The Canvas2DRenderer class is the base class for non GPU 2d rendering.

## Implements

- [`IRenderer`](../interfaces/IRenderer.md)

## Table of contents

### Constructors

- [constructor](Canvas2DRenderer.md#constructor)

### Properties

- [\_canvas](Canvas2DRenderer.md#_canvas)
- [\_children](Canvas2DRenderer.md#_children)
- [\_context](Canvas2DRenderer.md#_context)

### Methods

- [add](Canvas2DRenderer.md#add)
- [clear](Canvas2DRenderer.md#clear)
- [draw](Canvas2DRenderer.md#draw)
- [getCanvas](Canvas2DRenderer.md#getcanvas)
- [getChildren](Canvas2DRenderer.md#getchildren)
- [getContext](Canvas2DRenderer.md#getcontext)
- [getNumDrawCalls](Canvas2DRenderer.md#getnumdrawcalls)

## Constructors

### constructor

• **new Canvas2DRenderer**()

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:13](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L13)

## Properties

### \_canvas

• `Private` **\_canvas**: `HTMLCanvasElement`

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:9](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L9)

___

### \_children

• `Private` **\_children**: [`IDisplayObject`](../interfaces/IDisplayObject.md)[] = `[]`

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:8](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L8)

___

### \_context

• `Private` **\_context**: `CanvasRenderingContext2D`

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:10](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L10)

## Methods

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

[lib/core/rendering/canvas/Canvas2DRenderer.ts:30](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L30)

___

### clear

▸ **clear**(): `void`

Clears the current rendering pipeline

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[clear](../interfaces/IRenderer.md#clear)

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:38](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L38)

___

### draw

▸ **draw**(`canvas`, `context`): `void`

Draws the current rendering pipeline (sets of IDisplayObjects)
into the specified canvas, with the specified rendering context

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `context` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[draw](../interfaces/IRenderer.md#draw)

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:42](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L42)

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

[lib/core/rendering/canvas/Canvas2DRenderer.ts:26](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L26)

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

[lib/core/rendering/canvas/Canvas2DRenderer.ts:34](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L34)

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

[lib/core/rendering/canvas/Canvas2DRenderer.ts:22](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L22)

___

### getNumDrawCalls

▸ **getNumDrawCalls**(): `number`

Get the number of draw calls

#### Returns

`number`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[getNumDrawCalls](../interfaces/IRenderer.md#getnumdrawcalls)

#### Defined in

[lib/core/rendering/canvas/Canvas2DRenderer.ts:18](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/canvas/Canvas2DRenderer.ts#L18)
