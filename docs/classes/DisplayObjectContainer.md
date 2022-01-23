[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / DisplayObjectContainer

# Class: DisplayObjectContainer

The DisplayObjectContainer class is the base class for every DisplayObjects containers.
It supports basic functionality like adding, removing, containing children at a specific index or not.
It inherits from DisplayObject, so it could be transformed, but it's texture property is useless.

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
import {DisplayObject, DisplayObjectContainer, Stage} from "@thetinyspark/moocaccino-barista";

// Get the image
const img:HTMLImageElement = document.getElementById("my_img_id") as HTMLImageElement;

// Create stage instance
const stage:Stage = new Stage();

// Then, create a texture from the img
const texture:Texture = Texture.createFromSource("id",img);

// You can create a DisplayObjectContainer
const container = new DisplayObjectContainer();

// And now, you multiple DisplayObjects from the Texture
for( let i:number = 0; i < 10; i++){
 const sprite:IDisplayObject = DisplayObject.createFromTexture(texture);
 sprite.x = Math.round( Math.random() * 1024 );
 sprite.y = Math.round( Math.random() * 1024 );
 // add the new DisplayObject to the container
 container.addChild(sprite);
}

// All the container's transformations will be added to its children
container.rotation = Math.round( Math.random() * 360 );

// Defines renderer's canvas width & height
stage.getRenderer().getCanvas().width = stage.width = 1024;
stage.getRenderer().getCanvas().height = stage.height = 1024;

// If you want to see all the DisplayObject's inside the container's display list
// then you have to add the container itself into the stage's display list.
// you have to add it on stage children list.
stage.addChild(container);

// Now process the next frame
stage.nextFrame();

// Add the canvas to the HTML document.
document.body.appendChild(stage.getRenderer().getCanvas());
```

## Hierarchy

- [`DisplayObject`](DisplayObject.md)

  ↳ **`DisplayObjectContainer`**

  ↳↳ [`Stage`](Stage.md)

  ↳↳ [`IsoMap`](IsoMap.md)

## Implements

- [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md)

## Table of contents

### Constructors

- [constructor](DisplayObjectContainer.md#constructor)

### Properties

- [\_children](DisplayObjectContainer.md#_children)
- [filters](DisplayObjectContainer.md#filters)
- [height](DisplayObjectContainer.md#height)
- [matrix](DisplayObjectContainer.md#matrix)
- [opacity](DisplayObjectContainer.md#opacity)
- [parent](DisplayObjectContainer.md#parent)
- [rotation](DisplayObjectContainer.md#rotation)
- [scaleX](DisplayObjectContainer.md#scalex)
- [scaleY](DisplayObjectContainer.md#scaley)
- [texture](DisplayObjectContainer.md#texture)
- [transformOrigin](DisplayObjectContainer.md#transformorigin)
- [visible](DisplayObjectContainer.md#visible)
- [width](DisplayObjectContainer.md#width)
- [worldMatrix](DisplayObjectContainer.md#worldmatrix)
- [worldOpacity](DisplayObjectContainer.md#worldopacity)
- [x](DisplayObjectContainer.md#x)
- [y](DisplayObjectContainer.md#y)

### Methods

- [addChild](DisplayObjectContainer.md#addchild)
- [addChildAt](DisplayObjectContainer.md#addchildat)
- [contains](DisplayObjectContainer.md#contains)
- [emit](DisplayObjectContainer.md#emit)
- [getChildIndex](DisplayObjectContainer.md#getchildindex)
- [getChildren](DisplayObjectContainer.md#getchildren)
- [hasObservers](DisplayObjectContainer.md#hasobservers)
- [isObserver](DisplayObjectContainer.md#isobserver)
- [removeChild](DisplayObjectContainer.md#removechild)
- [removeChildAt](DisplayObjectContainer.md#removechildat)
- [removeChildren](DisplayObjectContainer.md#removechildren)
- [render](DisplayObjectContainer.md#render)
- [snapshot](DisplayObjectContainer.md#snapshot)
- [subscribe](DisplayObjectContainer.md#subscribe)
- [unsubscribe](DisplayObjectContainer.md#unsubscribe)
- [unsubscribeAll](DisplayObjectContainer.md#unsubscribeall)
- [update](DisplayObjectContainer.md#update)
- [createFromTexture](DisplayObjectContainer.md#createfromtexture)

## Constructors

### constructor

• **new DisplayObjectContainer**()

#### Inherited from

[DisplayObject](DisplayObject.md).[constructor](DisplayObject.md#constructor)

## Properties

### \_children

• `Private` **\_children**: [`IDisplayObject`](../interfaces/IDisplayObject.md)[] = `[]`

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:73](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L73)

___

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[filters](../interfaces/IDisplayObjectContainer.md#filters)

#### Inherited from

[DisplayObject](DisplayObject.md).[filters](DisplayObject.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[height](../interfaces/IDisplayObjectContainer.md#height)

#### Inherited from

[DisplayObject](DisplayObject.md).[height](DisplayObject.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L73)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[matrix](../interfaces/IDisplayObjectContainer.md#matrix)

#### Inherited from

[DisplayObject](DisplayObject.md).[matrix](DisplayObject.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[opacity](../interfaces/IDisplayObjectContainer.md#opacity)

#### Inherited from

[DisplayObject](DisplayObject.md).[opacity](DisplayObject.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[parent](../interfaces/IDisplayObjectContainer.md#parent)

#### Inherited from

[DisplayObject](DisplayObject.md).[parent](DisplayObject.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[rotation](../interfaces/IDisplayObjectContainer.md#rotation)

#### Inherited from

[DisplayObject](DisplayObject.md).[rotation](DisplayObject.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[scaleX](../interfaces/IDisplayObjectContainer.md#scalex)

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleX](DisplayObject.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[scaleY](../interfaces/IDisplayObjectContainer.md#scaley)

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleY](DisplayObject.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L70)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[texture](../interfaces/IDisplayObjectContainer.md#texture)

#### Inherited from

[DisplayObject](DisplayObject.md).[texture](DisplayObject.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[transformOrigin](../interfaces/IDisplayObjectContainer.md#transformorigin)

#### Inherited from

[DisplayObject](DisplayObject.md).[transformOrigin](DisplayObject.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[visible](../interfaces/IDisplayObjectContainer.md#visible)

#### Inherited from

[DisplayObject](DisplayObject.md).[visible](DisplayObject.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[width](../interfaces/IDisplayObjectContainer.md#width)

#### Inherited from

[DisplayObject](DisplayObject.md).[width](DisplayObject.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[worldMatrix](../interfaces/IDisplayObjectContainer.md#worldmatrix)

#### Inherited from

[DisplayObject](DisplayObject.md).[worldMatrix](DisplayObject.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[worldOpacity](../interfaces/IDisplayObjectContainer.md#worldopacity)

#### Inherited from

[DisplayObject](DisplayObject.md).[worldOpacity](DisplayObject.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[x](../interfaces/IDisplayObjectContainer.md#x)

#### Inherited from

[DisplayObject](DisplayObject.md).[x](DisplayObject.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[y](../interfaces/IDisplayObjectContainer.md#y)

#### Inherited from

[DisplayObject](DisplayObject.md).[y](DisplayObject.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L66)

## Methods

### addChild

▸ **addChild**(`child`): `void`

Adds a child IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added to the front (top) of all other children in this IDisplayObjectContainer instance.
To add a child to a specific index position, use the addChildAt() method.
If you add a child object that already has a different IDisplayObjectContainer as a parent,
the object is removed from the children list of the other IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`void`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[addChild](../interfaces/IDisplayObjectContainer.md#addchild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:75](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L75)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): `void`

Adds an IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added at the specified index position.
An index of 0 represents the back (bottom) of the IDisplayObjectContainer's display list for.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[addChildAt](../interfaces/IDisplayObjectContainer.md#addchildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:88](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L88)

___

### contains

▸ **contains**(`child`): `boolean`

Tells whether or not the specified IDisplayObject is a child of the IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`boolean`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[contains](../interfaces/IDisplayObjectContainer.md#contains)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:115](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L115)

___

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[emit](../interfaces/IDisplayObjectContainer.md#emit)

#### Inherited from

[DisplayObject](DisplayObject.md).[emit](DisplayObject.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns specified IDisplayObject's position inside the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`number`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[getChildIndex](../interfaces/IDisplayObjectContainer.md#getchildindex)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:111](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L111)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](../interfaces/IDisplayObject.md)[]

Returns IDisplayObjectContainer's children list

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)[]

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[getChildren](../interfaces/IDisplayObjectContainer.md#getchildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:107](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L107)

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[hasObservers](../interfaces/IDisplayObjectContainer.md#hasobservers)

#### Inherited from

[DisplayObject](DisplayObject.md).[hasObservers](DisplayObject.md#hasobservers)

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[isObserver](../interfaces/IDisplayObjectContainer.md#isobserver)

#### Inherited from

[DisplayObject](DisplayObject.md).[isObserver](DisplayObject.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### removeChild

▸ **removeChild**(`child`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Removes the specified IDisplayObject child from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[removeChild](../interfaces/IDisplayObjectContainer.md#removechild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:83](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L83)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Removes an IDisplayObject child at the specified index position from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[removeChildAt](../interfaces/IDisplayObjectContainer.md#removechildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:97](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L97)

___

### removeChildren

▸ **removeChildren**(): `void`

Removes all IDisplayObject children of the IDisplayObjectContainer children list.

#### Returns

`void`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[removeChildren](../interfaces/IDisplayObjectContainer.md#removechildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:119](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L119)

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[render](../interfaces/IDisplayObjectContainer.md#render)

#### Overrides

[DisplayObject](DisplayObject.md).[render](DisplayObject.md#render)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:134](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L134)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[snapshot](../interfaces/IDisplayObjectContainer.md#snapshot)

#### Inherited from

[DisplayObject](DisplayObject.md).[snapshot](DisplayObject.md#snapshot)

#### Defined in

[lib/core/display/DisplayObject.ts:78](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L78)

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[subscribe](../interfaces/IDisplayObjectContainer.md#subscribe)

#### Inherited from

[DisplayObject](DisplayObject.md).[subscribe](DisplayObject.md#subscribe)

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

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[unsubscribe](../interfaces/IDisplayObjectContainer.md#unsubscribe)

#### Inherited from

[DisplayObject](DisplayObject.md).[unsubscribe](DisplayObject.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[unsubscribeAll](../interfaces/IDisplayObjectContainer.md#unsubscribeall)

#### Inherited from

[DisplayObject](DisplayObject.md).[unsubscribeAll](DisplayObject.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9

___

### update

▸ **update**(`worldMatrix`, `worldOpacity`): `void`

update object's matrix, world matrix, opacity and world opacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldMatrix` | `mat2d` |
| `worldOpacity` | `number` |

#### Returns

`void`

#### Implementation of

[IDisplayObjectContainer](../interfaces/IDisplayObjectContainer.md).[update](../interfaces/IDisplayObjectContainer.md#update)

#### Overrides

[DisplayObject](DisplayObject.md).[update](DisplayObject.md#update)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:125](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObjectContainer.ts#L125)

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

#### Inherited from

[DisplayObject](DisplayObject.md).[createFromTexture](DisplayObject.md#createfromtexture)

#### Defined in

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L128)
