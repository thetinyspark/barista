[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Default2DShader

# Class: Default2DShader

The Default2DShader class is the base class for WebGL 2d rendering.
It is used by the WebGL2DRenderer class. This class provides a dynamic
basic fragment shader which adapts itself to the number of maximum
texture units.

## Table of contents

### Constructors

- [constructor](Default2DShader.md#constructor)

### Properties

- [fragmentShader](Default2DShader.md#fragmentshader)
- [id](Default2DShader.md#id)
- [program](Default2DShader.md#program)
- [projectionPointer](Default2DShader.md#projectionpointer)
- [vertexShader](Default2DShader.md#vertexshader)

### Methods

- [\_compile](Default2DShader.md#_compile)
- [\_getFragmentSource](Default2DShader.md#_getfragmentsource)
- [\_getVertexSource](Default2DShader.md#_getvertexsource)
- [\_init](Default2DShader.md#_init)

## Constructors

### constructor

• **new Default2DShader**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `WebGLRenderingContext` |

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:22](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L22)

## Properties

### fragmentShader

• **fragmentShader**: `WebGLShader` = `null`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:14](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L14)

___

### id

• **id**: `number` = `0`

The shader's id

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:13](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L13)

___

### program

• **program**: `WebGLProgram` = `null`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:16](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L16)

___

### projectionPointer

• **projectionPointer**: `WebGLUniformLocation` = `0`

The projection pointer is used to set the center of the world

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:20](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L20)

___

### vertexShader

• **vertexShader**: `WebGLShader` = `null`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:15](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L15)

## Methods

### \_compile

▸ `Private` **_compile**(`context`, `source`, `type`): `WebGLShader`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `WebGLRenderingContext` |
| `source` | `string` |
| `type` | `number` |

#### Returns

`WebGLShader`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:101](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L101)

___

### \_getFragmentSource

▸ `Private` **_getFragmentSource**(): `string`

#### Returns

`string`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:152](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L152)

___

### \_getVertexSource

▸ `Private` **_getVertexSource**(): `string`

#### Returns

`string`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:115](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L115)

___

### \_init

▸ `Private` **_init**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `WebGLRenderingContext` |

#### Returns

`void`

#### Defined in

[lib/core/rendering/webgl/Default2DShader.ts:26](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/Default2DShader.ts#L26)
