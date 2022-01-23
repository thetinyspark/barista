[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Geometry

# Class: Geometry

The Geometry class is a set of utilitaries functions.

## Table of contents

### Constructors

- [constructor](Geometry.md#constructor)

### Methods

- [collide](Geometry.md#collide)
- [getBoundingRect](Geometry.md#getboundingrect)
- [getHitbox](Geometry.md#gethitbox)
- [transformPoint](Geometry.md#transformpoint)

## Constructors

### constructor

• **new Geometry**()

## Methods

### collide

▸ `Static` **collide**(`x`, `y`, `child`): `boolean`

Says if the IDisplayObject collides the x,y coordinates or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | number |
| `y` | `number` | number |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) | IDisplayObject |

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/utils/Geometry.ts:101](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/Geometry.ts#L101)

___

### getBoundingRect

▸ `Static` **getBoundingRect**(`child`): [`Rectangle`](../modules.md#rectangle)

Calculates and returns the IDisplayObject's bouding Rectangle
in the world space coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) | IDisplayObject |

#### Returns

[`Rectangle`](../modules.md#rectangle)

Rectangle

#### Defined in

[lib/core/utils/Geometry.ts:64](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/Geometry.ts#L64)

___

### getHitbox

▸ `Static` **getHitbox**(`child`): [`Hitbox`](../modules.md#hitbox)

Calculates and returns the IDisplayObject's Hitbox
in the world space coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) | IDisplayObject |

#### Returns

[`Hitbox`](../modules.md#hitbox)

HitBox

#### Defined in

[lib/core/utils/Geometry.ts:16](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/Geometry.ts#L16)

___

### transformPoint

▸ `Static` **transformPoint**(`x`, `y`, `matrix`): [`Point`](../modules.md#point)

Transforms a pair of x,y coordinates with a matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | number |
| `y` | `number` | number |
| `matrix` | `mat2d` | mat2d |

#### Returns

[`Point`](../modules.md#point)

Point

#### Defined in

[lib/core/utils/Geometry.ts:87](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/Geometry.ts#L87)
