[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Stage

# Class: Stage

The Stage class is the base class for the scene.
It supports basic functionality like camera, clipping strategy, rendering...

```typescript
import {Stage, Camera} from "@thetinyspark/moocaccino-barista";

// Create stage instance
const stage:Stage = new Stage();

// Defines renderer's canvas width & height
stage.getRenderer().getCanvas().width = stage.width = 1024;
stage.getRenderer().getCanvas().height = stage.height = 1024;

// Now process the next frame
stage.nextFrame();

// Add the canvas to the HTML document.
document.body.appendChild(stage.getRenderer().getCanvas());

// Event thought a Stage is a DisplayObject, 
// the most of the time we should avoid to transform it.
// If you want to manipulate the whole scene, you have
// a basic camera support.

// create and sets the Camera
stage.setCamera(new Camera());

// then you can transform it.
// Here we translate the camera by 100px to the right,
// that will pan the whole scene by 100px to the left.
// Every transformation which is applied to the Camera
// is reversed and applied to the whole scene.
stage.getCamera().x = 100;

// If you wanna have control on which objects is actually drawn, 
// 'cause you have too many offscreen objects for example, 
// then you can define a custom clipping strategy.

const strategy:ClippingStrategy = (stage:Stage, camera:Camera)=>{
  // applies your clipping strategy code here
};
stage.setClippingStrategy(strategy);

stage.nextFrame();
```

## Hierarchy

- [`DisplayObjectContainer`](DisplayObjectContainer.md)

  ↳ **`Stage`**

## Table of contents

### Constructors

- [constructor](Stage.md#constructor)

### Properties

- [\_camera](Stage.md#_camera)
- [\_clippingStrategy](Stage.md#_clippingstrategy)
- [\_currentFrame](Stage.md#_currentframe)
- [\_renderer](Stage.md#_renderer)
- [autoUpdateMatrices](Stage.md#autoupdatematrices)
- [filters](Stage.md#filters)
- [height](Stage.md#height)
- [matrix](Stage.md#matrix)
- [opacity](Stage.md#opacity)
- [parent](Stage.md#parent)
- [rotation](Stage.md#rotation)
- [scaleX](Stage.md#scalex)
- [scaleY](Stage.md#scaley)
- [texture](Stage.md#texture)
- [transformOrigin](Stage.md#transformorigin)
- [visible](Stage.md#visible)
- [width](Stage.md#width)
- [worldMatrix](Stage.md#worldmatrix)
- [worldOpacity](Stage.md#worldopacity)
- [x](Stage.md#x)
- [y](Stage.md#y)

### Methods

- [addChild](Stage.md#addchild)
- [addChildAt](Stage.md#addchildat)
- [contains](Stage.md#contains)
- [emit](Stage.md#emit)
- [getCamera](Stage.md#getcamera)
- [getCanvas](Stage.md#getcanvas)
- [getChildIndex](Stage.md#getchildindex)
- [getChildren](Stage.md#getchildren)
- [getClippingStrategy](Stage.md#getclippingstrategy)
- [getContext](Stage.md#getcontext)
- [getCurrentFrame](Stage.md#getcurrentframe)
- [getRenderer](Stage.md#getrenderer)
- [hasObservers](Stage.md#hasobservers)
- [isObserver](Stage.md#isobserver)
- [nextFrame](Stage.md#nextframe)
- [removeChild](Stage.md#removechild)
- [removeChildAt](Stage.md#removechildat)
- [removeChildren](Stage.md#removechildren)
- [render](Stage.md#render)
- [setCamera](Stage.md#setcamera)
- [setClippingStrategy](Stage.md#setclippingstrategy)
- [setRenderer](Stage.md#setrenderer)
- [snapshot](Stage.md#snapshot)
- [subscribe](Stage.md#subscribe)
- [unsubscribe](Stage.md#unsubscribe)
- [unsubscribeAll](Stage.md#unsubscribeall)
- [update](Stage.md#update)
- [createFromTexture](Stage.md#createfromtexture)

## Constructors

### constructor

• **new Stage**()

#### Overrides

[DisplayObjectContainer](DisplayObjectContainer.md).[constructor](DisplayObjectContainer.md#constructor)

#### Defined in

[lib/core/display/Stage.ts:68](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L68)

## Properties

### \_camera

• `Private` **\_camera**: [`Camera`](Camera.md) = `null`

#### Defined in

[lib/core/display/Stage.ts:58](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L58)

___

### \_clippingStrategy

• `Private` **\_clippingStrategy**: [`ClippingStrategy`](../modules.md#clippingstrategy) = `null`

#### Defined in

[lib/core/display/Stage.ts:61](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L61)

___

### \_currentFrame

• `Private` **\_currentFrame**: `number` = `0`

#### Defined in

[lib/core/display/Stage.ts:59](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L59)

___

### \_renderer

• `Private` **\_renderer**: [`IRenderer`](../interfaces/IRenderer.md)

#### Defined in

[lib/core/display/Stage.ts:60](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L60)

___

### autoUpdateMatrices

• **autoUpdateMatrices**: `boolean` = `true`

Tells if the matrices are updated every frame or not

#### Defined in

[lib/core/display/Stage.ts:66](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L66)

___

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[filters](DisplayObjectContainer.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[height](DisplayObjectContainer.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L73)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[matrix](DisplayObjectContainer.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[opacity](DisplayObjectContainer.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[parent](DisplayObjectContainer.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[rotation](DisplayObjectContainer.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[scaleX](DisplayObjectContainer.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[scaleY](DisplayObjectContainer.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L70)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[texture](DisplayObjectContainer.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[transformOrigin](DisplayObjectContainer.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[visible](DisplayObjectContainer.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[width](DisplayObjectContainer.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[worldMatrix](DisplayObjectContainer.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[worldOpacity](DisplayObjectContainer.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[x](DisplayObjectContainer.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[y](DisplayObjectContainer.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L66)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[addChild](DisplayObjectContainer.md#addchild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:75](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L75)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[addChildAt](DisplayObjectContainer.md#addchildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:88](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L88)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[contains](DisplayObjectContainer.md#contains)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:115](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L115)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[emit](DisplayObjectContainer.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getCamera

▸ **getCamera**(): [`Camera`](Camera.md)

Returns the current stage's Camera

#### Returns

[`Camera`](Camera.md)

Camera object

#### Defined in

[lib/core/display/Stage.ts:84](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L84)

___

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

Returns the renderer's canvas.

#### Returns

`HTMLCanvasElement`

HTMLCanvasElement object

#### Defined in

[lib/core/display/Stage.ts:126](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L126)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[getChildIndex](DisplayObjectContainer.md#getchildindex)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:111](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L111)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](../interfaces/IDisplayObject.md)[]

Returns IDisplayObjectContainer's children list

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)[]

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[getChildren](DisplayObjectContainer.md#getchildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:107](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L107)

___

### getClippingStrategy

▸ **getClippingStrategy**(): [`ClippingStrategy`](../modules.md#clippingstrategy)

Returns the current stage's clipping strategy, default is null

#### Returns

[`ClippingStrategy`](../modules.md#clippingstrategy)

ClippingStrategy function

#### Defined in

[lib/core/display/Stage.ts:102](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L102)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

Returns the renderer's rendering context

#### Returns

`CanvasRenderingContext2D` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`

CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext object

#### Defined in

[lib/core/display/Stage.ts:134](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L134)

___

### getCurrentFrame

▸ **getCurrentFrame**(): `number`

Returns the current frame

#### Returns

`number`

number

#### Defined in

[lib/core/display/Stage.ts:142](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L142)

___

### getRenderer

▸ **getRenderer**(): [`IRenderer`](../interfaces/IRenderer.md)

Returns the current stage's renderer, default is Canvas2DRenderer

#### Returns

[`IRenderer`](../interfaces/IRenderer.md)

IRenderer object

#### Defined in

[lib/core/display/Stage.ts:110](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L110)

___

### hasObservers

▸ **hasObservers**(`eventType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |

#### Returns

`boolean`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[hasObservers](DisplayObjectContainer.md#hasobservers)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[isObserver](DisplayObjectContainer.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### nextFrame

▸ **nextFrame**(): `void`

Updates every DisplayObject matrices (if auto).
Increase current frame.
Applies clipping strategy if there is one.
Renders the display list.
Emit events (ENTER_FRAME & FRAME_END)

#### Returns

`void`

#### Defined in

[lib/core/display/Stage.ts:153](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L153)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChild](DisplayObjectContainer.md#removechild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:83](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L83)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChildAt](DisplayObjectContainer.md#removechildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:97](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L97)

___

### removeChildren

▸ **removeChildren**(): `void`

Removes all IDisplayObject children of the IDisplayObjectContainer children list.

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChildren](DisplayObjectContainer.md#removechildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:119](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L119)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[render](DisplayObjectContainer.md#render)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:134](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObjectContainer.ts#L134)

___

### setCamera

▸ **setCamera**(`camera`): `void`

Sets the current Stage Camera, default is null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | [`Camera`](Camera.md) | Camera object |

#### Returns

`void`

#### Defined in

[lib/core/display/Stage.ts:76](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L76)

___

### setClippingStrategy

▸ **setClippingStrategy**(`strategy`): `void`

Sets a specific function which is used to clip the scene.
Clipping the scene consists of removing certain objects from
the rendering pipeline according to specific conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | [`ClippingStrategy`](../modules.md#clippingstrategy) | ClippingStrategy function |

#### Returns

`void`

#### Defined in

[lib/core/display/Stage.ts:94](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L94)

___

### setRenderer

▸ **setRenderer**(`renderer`): `void`

Sets the current stage's renderer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`IRenderer`](../interfaces/IRenderer.md) | IRenderer object |

#### Returns

`void`

#### Defined in

[lib/core/display/Stage.ts:118](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L118)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[snapshot](DisplayObjectContainer.md#snapshot)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[subscribe](DisplayObjectContainer.md#subscribe)

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

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[unsubscribe](DisplayObjectContainer.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[unsubscribeAll](DisplayObjectContainer.md#unsubscribeall)

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

#### Overrides

[DisplayObjectContainer](DisplayObjectContainer.md).[update](DisplayObjectContainer.md#update)

#### Defined in

[lib/core/display/Stage.ts:178](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L178)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[createFromTexture](DisplayObjectContainer.md#createfromtexture)

#### Defined in

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L128)
