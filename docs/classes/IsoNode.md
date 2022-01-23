[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IsoNode

# Class: IsoNode

## Hierarchy

- [`GameNode`](GameNode.md)

  ↳ **`IsoNode`**

## Table of contents

### Constructors

- [constructor](IsoNode.md#constructor)

### Properties

- [cellHeight](IsoNode.md#cellheight)
- [cellWidth](IsoNode.md#cellwidth)
- [col](IsoNode.md#col)
- [height](IsoNode.md#height)
- [id](IsoNode.md#id)
- [isoX](IsoNode.md#isox)
- [isoY](IsoNode.md#isoy)
- [isoZ](IsoNode.md#isoz)
- [row](IsoNode.md#row)
- [state](IsoNode.md#state)
- [width](IsoNode.md#width)

### Accessors

- [offsetX](IsoNode.md#offsetx)
- [offsetY](IsoNode.md#offsety)

### Methods

- [resetCoordinatesFromRowAndCol](IsoNode.md#resetcoordinatesfromrowandcol)
- [resetRowAndColFromCoordinates](IsoNode.md#resetrowandcolfromcoordinates)

## Constructors

### constructor

• **new IsoNode**()

#### Inherited from

[GameNode](GameNode.md).[constructor](GameNode.md#constructor)

## Properties

### cellHeight

• **cellHeight**: `number` = `32`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:12](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L12)

___

### cellWidth

• **cellWidth**: `number` = `64`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:11](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L11)

___

### col

• **col**: `number` = `0`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:10](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L10)

___

### height

• **height**: `number` = `64`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:14](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L14)

___

### id

• **id**: `string` = `""`

#### Inherited from

[GameNode](GameNode.md).[id](GameNode.md#id)

#### Defined in

[lib/sdk/common/model/node/GameNode.ts:2](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/model/node/GameNode.ts#L2)

___

### isoX

• **isoX**: `number` = `0`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:6](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L6)

___

### isoY

• **isoY**: `number` = `0`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:7](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L7)

___

### isoZ

• **isoZ**: `number` = `0`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:8](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L8)

___

### row

• **row**: `number` = `0`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:9](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L9)

___

### state

• **state**: `any` = `{}`

#### Inherited from

[GameNode](GameNode.md).[state](GameNode.md#state)

#### Defined in

[lib/sdk/common/model/node/GameNode.ts:3](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/model/node/GameNode.ts#L3)

___

### width

• **width**: `number` = `64`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:13](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L13)

## Accessors

### offsetX

• `get` **offsetX**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:20](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L20)

___

### offsetY

• `get` **offsetY**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:16](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L16)

## Methods

### resetCoordinatesFromRowAndCol

▸ **resetCoordinatesFromRowAndCol**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:30](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L30)

___

### resetRowAndColFromCoordinates

▸ **resetRowAndColFromCoordinates**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/isometric/model/node/IsoNode.ts:24](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/isometric/model/node/IsoNode.ts#L24)
