[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Zone

# Class: Zone

The Zone class represents a 2d Region which can be bound to a specific data.
It is used by Spritesheet class but you can use it for another
space partitionning/packing problem. A Zone instance can be splitted on
the right, left, top and bottom sides.

## Table of contents

### Constructors

- [constructor](Zone.md#constructor)

### Properties

- [data](Zone.md#data)
- [height](Zone.md#height)
- [width](Zone.md#width)
- [x](Zone.md#x)
- [y](Zone.md#y)

### Methods

- [\_partialClone](Zone.md#_partialclone)
- [canContain](Zone.md#cancontain)
- [getArea](Zone.md#getarea)
- [isEmpty](Zone.md#isempty)
- [splitBottom](Zone.md#splitbottom)
- [splitLeft](Zone.md#splitleft)
- [splitRight](Zone.md#splitright)
- [splitTop](Zone.md#splittop)

## Constructors

### constructor

• **new Zone**()

## Properties

### data

• **data**: `any` = `null`

#### Defined in

[lib/core/texture/Zone.ts:12](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L12)

___

### height

• **height**: `number`

#### Defined in

[lib/core/texture/Zone.ts:11](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L11)

___

### width

• **width**: `number`

#### Defined in

[lib/core/texture/Zone.ts:10](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L10)

___

### x

• **x**: `number`

#### Defined in

[lib/core/texture/Zone.ts:8](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L8)

___

### y

• **y**: `number`

#### Defined in

[lib/core/texture/Zone.ts:9](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L9)

## Methods

### \_partialClone

▸ `Private` **_partialClone**(): [`Zone`](Zone.md)

#### Returns

[`Zone`](Zone.md)

#### Defined in

[lib/core/texture/Zone.ts:18](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L18)

___

### canContain

▸ **canContain**(`width`, `height`): `boolean`

Says if the Zone could contain an hypothetic rectangular
object which has a specific width & height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | number |
| `height` | `number` | number |

#### Returns

`boolean`

#### Defined in

[lib/core/texture/Zone.ts:101](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L101)

___

### getArea

▸ **getArea**(): `number`

Returns the Zone's area .

#### Returns

`number`

number

#### Defined in

[lib/core/texture/Zone.ts:91](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L91)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/core/texture/Zone.ts:14](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L14)

___

### splitBottom

▸ **splitBottom**(`limit`): [`Zone`](Zone.md)

Splits the Zone on the bottom side and create another zone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number The y coordinates which splits the Zone |

#### Returns

[`Zone`](Zone.md)

Zone

#### Defined in

[lib/core/texture/Zone.ts:62](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L62)

___

### splitLeft

▸ **splitLeft**(`limit`): [`Zone`](Zone.md)

Splits the Zone on the left side and create another zone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number The x coordinates which splits the Zone |

#### Returns

[`Zone`](Zone.md)

Zone

#### Defined in

[lib/core/texture/Zone.ts:47](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L47)

___

### splitRight

▸ **splitRight**(`limit`): [`Zone`](Zone.md)

Splits the Zone on the right side and create another zone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number The x coordinates which splits the Zone |

#### Returns

[`Zone`](Zone.md)

Zone

#### Defined in

[lib/core/texture/Zone.ts:32](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L32)

___

### splitTop

▸ **splitTop**(`limit`): [`Zone`](Zone.md)

Splits the Zone on the top side and create another zone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number The y coordinates which splits the Zone |

#### Returns

[`Zone`](Zone.md)

Zone

#### Defined in

[lib/core/texture/Zone.ts:77](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/texture/Zone.ts#L77)
