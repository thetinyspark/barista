[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / DisplayObject

# Class: DisplayObject

The DisplayObject class is the base class for all objects that can be placed on the display list.
It supports basic functionality like the x and y position of an object, as well as more advanced
properties of the object such as its transformation matrix.

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="dist/main.js"></script>
</head>
<body>
    <img src="./moocaccino.png" alt="moocaccino logo" id="my_img_id"/>
</body>
</html>
```
index.ts
```typescript
// Get the image
const img:HTMLImageElement = document.getElementById("my_img_id") as HTMLImageElement;

// Create stage instance
const stage:Stage = new Stage();

// Then, create a texture from the img
const texture:Texture = Texture.createFromSource("id",img);

// And now, you can create a DisplayObject from the Texture
const sprite:IDisplayObject = DisplayObject.createFromTexture(texture);

// Defines renderer's canvas width & height
stage.getRenderer().getCanvas().width = stage.width = 1024;
stage.getRenderer().getCanvas().height = stage.height = 1024;

// If you want to see DisplayObject on the scene (stage), 
// you have to add it on stage children list.
stage.addChild(sprite);

// Now process the next frame
stage.nextFrame();

// Add the canvas to the HTML document.
document.body.appendChild(stage.getRenderer().getCanvas());
```

## Hierarchy

- [`Emitter`](Emitter.md)

  ↳ **`DisplayObject`**

  ↳↳ [`Animation`](Animation.md)

  ↳↳ [`DisplayObjectContainer`](DisplayObjectContainer.md)

  ↳↳ [`Stats`](Stats.md)

  ↳↳ [`Camera`](Camera.md)

## Implements

- [`IDisplayObject`](../interfaces/IDisplayObject.md)

## Table of contents

### Constructors

- [constructor](DisplayObject.md#constructor)

### Properties

- [filters](DisplayObject.md#filters)
- [height](DisplayObject.md#height)
- [matrix](DisplayObject.md#matrix)
- [opacity](DisplayObject.md#opacity)
- [parent](DisplayObject.md#parent)
- [rotation](DisplayObject.md#rotation)
- [scaleX](DisplayObject.md#scalex)
- [scaleY](DisplayObject.md#scaley)
- [texture](DisplayObject.md#texture)
- [transformOrigin](DisplayObject.md#transformorigin)
- [visible](DisplayObject.md#visible)
- [width](DisplayObject.md#width)
- [worldMatrix](DisplayObject.md#worldmatrix)
- [worldOpacity](DisplayObject.md#worldopacity)
- [x](DisplayObject.md#x)
- [y](DisplayObject.md#y)

### Methods

- [emit](DisplayObject.md#emit)
- [hasObservers](DisplayObject.md#hasobservers)
- [isObserver](DisplayObject.md#isobserver)
- [render](DisplayObject.md#render)
- [snapshot](DisplayObject.md#snapshot)
- [subscribe](DisplayObject.md#subscribe)
- [unsubscribe](DisplayObject.md#unsubscribe)
- [unsubscribeAll](DisplayObject.md#unsubscribeall)
- [update](DisplayObject.md#update)
- [createFromTexture](DisplayObject.md#createfromtexture)

## Constructors

### constructor

• **new DisplayObject**()

#### Inherited from

[Emitter](Emitter.md).[constructor](Emitter.md#constructor)

## Properties

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[filters](../interfaces/IDisplayObject.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[height](../interfaces/IDisplayObject.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L73)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[matrix](../interfaces/IDisplayObject.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[opacity](../interfaces/IDisplayObject.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[parent](../interfaces/IDisplayObject.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[rotation](../interfaces/IDisplayObject.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[scaleX](../interfaces/IDisplayObject.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[scaleY](../interfaces/IDisplayObject.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L70)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[texture](../interfaces/IDisplayObject.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[transformOrigin](../interfaces/IDisplayObject.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[visible](../interfaces/IDisplayObject.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[width](../interfaces/IDisplayObject.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[worldMatrix](../interfaces/IDisplayObject.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[worldOpacity](../interfaces/IDisplayObject.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[x](../interfaces/IDisplayObject.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[y](../interfaces/IDisplayObject.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L66)

## Methods

### emit

▸ **emit**(`eventType`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `payload` | `any` |

#### Returns

`void`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[emit](../interfaces/IDisplayObject.md#emit)

#### Inherited from

[Emitter](Emitter.md).[emit](Emitter.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### hasObservers

▸ **hasObservers**(`eventType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |

#### Returns

`boolean`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[hasObservers](../interfaces/IDisplayObject.md#hasobservers)

#### Inherited from

[Emitter](Emitter.md).[hasObservers](Emitter.md#hasobservers)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:5

___

### isObserver

▸ **isObserver**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[isObserver](../interfaces/IDisplayObject.md#isobserver)

#### Inherited from

[Emitter](Emitter.md).[isObserver](Emitter.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### render

▸ **render**(`renderer`): `void`

Draws the object into using the IRenderer passed in param

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`IRenderer`](../interfaces/IRenderer.md) |

#### Returns

`void`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[render](../interfaces/IDisplayObject.md#render)

#### Defined in

[lib/core/display/DisplayObject.ts:117](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L117)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[snapshot](../interfaces/IDisplayObject.md#snapshot)

#### Defined in

[lib/core/display/DisplayObject.ts:78](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L78)

___

### subscribe

▸ **subscribe**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[subscribe](../interfaces/IDisplayObject.md#subscribe)

#### Inherited from

[Emitter](Emitter.md).[subscribe](Emitter.md#subscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:8

___

### unsubscribe

▸ **unsubscribe**(`eventType`, `observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`void`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[unsubscribe](../interfaces/IDisplayObject.md#unsubscribe)

#### Inherited from

[Emitter](Emitter.md).[unsubscribe](Emitter.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[unsubscribeAll](../interfaces/IDisplayObject.md#unsubscribeall)

#### Inherited from

[Emitter](Emitter.md).[unsubscribeAll](Emitter.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9

___

### update

▸ **update**(`worldMatrix`, `worldOpacity?`): `void`

update object's matrix, world matrix, opacity and world opacity

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `worldMatrix` | `mat2d` | `undefined` |
| `worldOpacity` | `number` | `1` |

#### Returns

`void`

#### Implementation of

[IDisplayObject](../interfaces/IDisplayObject.md).[update](../interfaces/IDisplayObject.md#update)

#### Defined in

[lib/core/display/DisplayObject.ts:99](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L99)

___

### createFromTexture

▸ `Static` **createFromTexture**(`texture`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Creates and returns a Display Object from a Texture object.
The resulting object will have the same width and height
as the "sx" and "sy" properties of the Texture object.
The "texture" property will contains the Texture object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Defined in

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L128)
