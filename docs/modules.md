# Table of contents

### Enumerations

- [AnimationEvent](enums/AnimationEvent.md)
- [GamePadTouchEvent](enums/GamePadTouchEvent.md)
- [MazeNodeType](enums/MazeNodeType.md)
- [MouseControlEvent](enums/MouseControlEvent.md)
- [StageEvent](enums/StageEvent.md)

### Classes

- [Animation](classes/Animation.md)
- [AssetsManager](classes/AssetsManager.md)
- [BatchDrawCall](classes/BatchDrawCall.md)
- [BatchTexture](classes/BatchTexture.md)
- [Camera](classes/Camera.md)
- [Canvas2DRenderer](classes/Canvas2DRenderer.md)
- [CanvasUtils](classes/CanvasUtils.md)
- [Default2DShader](classes/Default2DShader.md)
- [DisplayObject](classes/DisplayObject.md)
- [DisplayObjectContainer](classes/DisplayObjectContainer.md)
- [Emitter](classes/Emitter.md)
- [FiniteStateMachine](classes/FiniteStateMachine.md)
- [GameNode](classes/GameNode.md)
- [GamePad](classes/GamePad.md)
- [GamePadTouch](classes/GamePadTouch.md)
- [Geometry](classes/Geometry.md)
- [Grid2D](classes/Grid2D.md)
- [Grid3D](classes/Grid3D.md)
- [Inventory](classes/Inventory.md)
- [IsoMap](classes/IsoMap.md)
- [IsoNode](classes/IsoNode.md)
- [MathUtils](classes/MathUtils.md)
- [Maze2D](classes/Maze2D.md)
- [Maze3D](classes/Maze3D.md)
- [MouseControl](classes/MouseControl.md)
- [Notification](classes/Notification.md)
- [PathFinder2D](classes/PathFinder2D.md)
- [PathFinder3D](classes/PathFinder3D.md)
- [Spritesheet](classes/Spritesheet.md)
- [Stage](classes/Stage.md)
- [Stats](classes/Stats.md)
- [Texture](classes/Texture.md)
- [TextureData](classes/TextureData.md)
- [TextureDataManager](classes/TextureDataManager.md)
- [WebGlConfig](classes/WebGlConfig.md)
- [Webgl2DRenderer](classes/Webgl2DRenderer.md)
- [Zone](classes/Zone.md)

### Interfaces

- [IBatch](interfaces/IBatch.md)
- [IDisplayObject](interfaces/IDisplayObject.md)
- [IDisplayObjectContainer](interfaces/IDisplayObjectContainer.md)
- [IEmitter](interfaces/IEmitter.md)
- [IFilter](interfaces/IFilter.md)
- [INotification](interfaces/INotification.md)
- [IRenderer](interfaces/IRenderer.md)
- [IState](interfaces/IState.md)
- [IStorable](interfaces/IStorable.md)
- [Isometric](interfaces/Isometric.md)

### Type aliases

- [ClippingStrategy](modules.md#clippingstrategy)
- [Constructable](modules.md#constructable)
- [Hitbox](modules.md#hitbox)
- [Point](modules.md#point)
- [Rectangle](modules.md#rectangle)
- [UV](modules.md#uv)

### Variables

- [BLOB\_TYPE](modules.md#blob_type)
- [IMAGE\_TYPE](modules.md#image_type)
- [INDICES\_PER\_QUAD](modules.md#indices_per_quad)
- [JSON\_TYPE](modules.md#json_type)
- [LOAD\_ERROR](modules.md#load_error)
- [LOAD\_SUCCESS](modules.md#load_success)
- [MAX\_QUAD\_PER\_CALL](modules.md#max_quad_per_call)
- [NUM\_VERTICES\_PER\_QUAD](modules.md#num_vertices_per_quad)
- [SOUND\_TYPE](modules.md#sound_type)
- [VERTEX\_ARRAY\_SIZE](modules.md#vertex_array_size)
- [VERTEX\_SIZE](modules.md#vertex_size)
- [VIDEO\_TYPE](modules.md#video_type)

### Functions

- [createIndexArray](modules.md#createindexarray)
- [createVertexArray](modules.md#createvertexarray)
- [isDisplayObjectContainer](modules.md#isdisplayobjectcontainer)
- [isWebGLAvailable](modules.md#iswebglavailable)
- [isoSort](modules.md#isosort)
- [isoToScreen](modules.md#isotoscreen)
- [makeIsometric](modules.md#makeisometric)
- [pushVerticesInto](modules.md#pushverticesinto)
- [screenToIso](modules.md#screentoiso)

## Type aliases

### ClippingStrategy

Ƭ **ClippingStrategy**: (`stage`: [`Stage`](classes/Stage.md), `camera`: [`Camera`](classes/Camera.md)) => `void`

#### Type declaration

▸ (`stage`, `camera`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](classes/Stage.md) |
| `camera` | [`Camera`](classes/Camera.md) |

##### Returns

`void`

#### Defined in

[lib/core/display/Stage.ts:192](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stage.ts#L192)

___

### Constructable

Ƭ **Constructable**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[lib/sdk/isometric/mixins/mixins.ts:4](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/isometric/mixins/mixins.ts#L4)

___

### Hitbox

Ƭ **Hitbox**: `Object`

An object type which defines four points representing an hitbox

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bottomLeft` | [`Point`](modules.md#point) |
| `bottomRight` | [`Point`](modules.md#point) |
| `topLeft` | [`Point`](modules.md#point) |
| `topRight` | [`Point`](modules.md#point) |

#### Defined in

[lib/core/utils/Geometry.ts:116](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/utils/Geometry.ts#L116)

___

### Point

Ƭ **Point**: `Object`

An object type which a 2d point (x,y)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[lib/core/utils/Geometry.ts:120](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/utils/Geometry.ts#L120)

___

### Rectangle

Ƭ **Rectangle**: `Object`

An object type which represents a Rectangle

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[lib/core/utils/Geometry.ts:124](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/utils/Geometry.ts#L124)

___

### UV

Ƭ **UV**: `Object`

The UV type represents the uv coordinates of the texture
sx, sy, sw, sh properties into the TextureData

#### Type declaration

| Name | Type |
| :------ | :------ |
| `u` | `number` |
| `v` | `number` |

#### Defined in

[lib/core/texture/Texture.ts:7](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Texture.ts#L7)

## Variables

### BLOB\_TYPE

• **BLOB\_TYPE**: `string` = `"BLOB_TYPE"`

#### Defined in

[lib/core/assets/AssetsManager.ts:304](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L304)

___

### IMAGE\_TYPE

• **IMAGE\_TYPE**: `string` = `"IMAGE_TYPE"`

#### Defined in

[lib/core/assets/AssetsManager.ts:300](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L300)

___

### INDICES\_PER\_QUAD

• **INDICES\_PER\_QUAD**: `number` = `6`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:10](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L10)

___

### JSON\_TYPE

• **JSON\_TYPE**: `string` = `"JSON_TYPE"`

#### Defined in

[lib/core/assets/AssetsManager.ts:303](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L303)

___

### LOAD\_ERROR

• **LOAD\_ERROR**: `string` = `"LOAD_ERROR"`

#### Defined in

[lib/core/assets/AssetsManager.ts:297](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L297)

___

### LOAD\_SUCCESS

• **LOAD\_SUCCESS**: `string` = `"LOAD_SUCCESS"`

#### Defined in

[lib/core/assets/AssetsManager.ts:298](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L298)

___

### MAX\_QUAD\_PER\_CALL

• **MAX\_QUAD\_PER\_CALL**: `number`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:14](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L14)

___

### NUM\_VERTICES\_PER\_QUAD

• **NUM\_VERTICES\_PER\_QUAD**: `number` = `4`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:11](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L11)

___

### SOUND\_TYPE

• **SOUND\_TYPE**: `string` = `"SOUND_TYPE"`

#### Defined in

[lib/core/assets/AssetsManager.ts:302](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L302)

___

### VERTEX\_ARRAY\_SIZE

• **VERTEX\_ARRAY\_SIZE**: `number`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:15](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L15)

___

### VERTEX\_SIZE

• **VERTEX\_SIZE**: `number` = `12`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:9](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L9)

___

### VIDEO\_TYPE

• **VIDEO\_TYPE**: `string` = `"VIDEO_TYPE"`

#### Defined in

[lib/core/assets/AssetsManager.ts:301](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/assets/AssetsManager.ts#L301)

## Functions

### createIndexArray

▸ **createIndexArray**(): `Uint16Array`

#### Returns

`Uint16Array`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:85](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L85)

___

### createVertexArray

▸ **createVertexArray**(): `Float32Array`

#### Returns

`Float32Array`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:81](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L81)

___

### isDisplayObjectContainer

▸ **isDisplayObjectContainer**(`value`): value is IDisplayObjectContainer

Says wether or not the object passed in param is a DisplayObjectContainer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`IDisplayObjectContainer`](interfaces/IDisplayObjectContainer.md) \| [`IDisplayObject`](interfaces/IDisplayObject.md) | IDisplayObject\|IDisplayObjectContainer |

#### Returns

value is IDisplayObjectContainer

boolean

#### Defined in

[lib/core/utils/isser.ts:10](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/utils/isser.ts#L10)

___

### isWebGLAvailable

▸ **isWebGLAvailable**(): `boolean`

Says wether or not webGL is available

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/utils/isser.ts:18](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/utils/isser.ts#L18)

___

### isoSort

▸ **isoSort**(`a`, `b`): ``1`` \| ``-1``

Sort object according to a top iso view (camera) and their isoNode coordinates  (isoX, isoY, isoZ).
- Smaller isoY means object is farther.
- Greater isoY means object is closer.

If both objects share the same isoY:
- Smaller isoZ means objects is farther.
- Greater isoZ means objects is closer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Isometric`](interfaces/Isometric.md) |
| `b` | [`Isometric`](interfaces/Isometric.md) |

#### Returns

``1`` \| ``-1``

#### Defined in

[lib/sdk/isometric/utils/iso.utils.ts:45](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/isometric/utils/iso.utils.ts#L45)

___

### isoToScreen

▸ **isoToScreen**(`row`, `col`, `cellW`, `cellH`): `Object`

Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y

**`method`** isoToScreen

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `cellW` | `number` |
| `cellH` | `number` |

#### Returns

`Object`

a Point Object

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[lib/sdk/isometric/utils/iso.utils.ts:30](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/isometric/utils/iso.utils.ts#L30)

___

### makeIsometric

▸ **makeIsometric**<`T`\>(`userClass`): { `prototype`: `__class`<`any`\>  } & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](modules.md#constructable)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userClass` | `T` |

#### Returns

{ `prototype`: `__class`<`any`\>  } & `T`

#### Defined in

[lib/sdk/isometric/mixins/mixins.ts:11](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/isometric/mixins/mixins.ts#L11)

___

### pushVerticesInto

▸ **pushVerticesInto**(`children`, `vertexArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`IDisplayObject`](interfaces/IDisplayObject.md)[] |
| `vertexArray` | `Float32Array` |

#### Returns

`void`

#### Defined in

[lib/core/rendering/webgl/WebGlConfig.ts:17](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/WebGlConfig.ts#L17)

___

### screenToIso

▸ **screenToIso**(`x`, `y`, `cellW`, `cellH`): `Object`

Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col

**`method`** screenToIso

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `cellW` | `number` |
| `cellH` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `row` | `number` |

#### Defined in

[lib/sdk/isometric/utils/iso.utils.ts:12](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/isometric/utils/iso.utils.ts#L12)
