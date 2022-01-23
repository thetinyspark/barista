[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Maze2D

# Class: Maze2D

## Table of contents

### Constructors

- [constructor](Maze2D.md#constructor)

### Properties

- [\_currentCol](Maze2D.md#_currentcol)
- [\_currentRow](Maze2D.md#_currentrow)
- [\_grid](Maze2D.md#_grid)
- [\_pathCoords](Maze2D.md#_pathcoords)

### Methods

- [finalize](Maze2D.md#finalize)
- [getCols](Maze2D.md#getcols)
- [getCurrentNode](Maze2D.md#getcurrentnode)
- [getData](Maze2D.md#getdata)
- [getRows](Maze2D.md#getrows)
- [isFinished](Maze2D.md#isfinished)
- [reset](Maze2D.md#reset)
- [step](Maze2D.md#step)

## Constructors

### constructor

• **new Maze2D**()

## Properties

### \_currentCol

• `Private` **\_currentCol**: `number` = `0`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:10](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L10)

___

### \_currentRow

• `Private` **\_currentRow**: `number` = `0`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:9](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L9)

___

### \_grid

• `Private` **\_grid**: [`Grid2D`](Grid2D.md)<[`GameNode`](GameNode.md)\> = `null`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:7](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L7)

___

### \_pathCoords

• `Private` **\_pathCoords**: `number`[][]

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:8](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L8)

## Methods

### finalize

▸ **finalize**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:49](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L49)

___

### getCols

▸ **getCols**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:33](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L33)

___

### getCurrentNode

▸ **getCurrentNode**(): [`GameNode`](GameNode.md)

#### Returns

[`GameNode`](GameNode.md)

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:37](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L37)

___

### getData

▸ **getData**(): [`GameNode`](GameNode.md)[][]

#### Returns

[`GameNode`](GameNode.md)[][]

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:41](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L41)

___

### getRows

▸ **getRows**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:29](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L29)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:45](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L45)

___

### reset

▸ **reset**(`rows`, `cols`, `startRow`, `startCol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |
| `startRow` | `number` |
| `startCol` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:12](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L12)

___

### step

▸ **step**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze2D.ts:55](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/Maze2D.ts#L55)
