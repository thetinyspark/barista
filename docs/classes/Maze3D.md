---
title: "Class: Maze3D"
linkTitle: "Maze3D"
slug: "Maze3D"
---

## Table of contents

### Constructors

- [constructor](Maze3D.md#constructor)

### Properties

- [\_currentCol](Maze3D.md#_currentcol)
- [\_currentLayer](Maze3D.md#_currentlayer)
- [\_currentRow](Maze3D.md#_currentrow)
- [\_grid](Maze3D.md#_grid)
- [\_pathCoords](Maze3D.md#_pathcoords)

### Methods

- [finalize](Maze3D.md#finalize)
- [getCols](Maze3D.md#getcols)
- [getCurrentNode](Maze3D.md#getcurrentnode)
- [getData](Maze3D.md#getdata)
- [getLayers](Maze3D.md#getlayers)
- [getRows](Maze3D.md#getrows)
- [isFinished](Maze3D.md#isfinished)
- [reset](Maze3D.md#reset)
- [step](Maze3D.md#step)

## Constructors

### constructor

• **new Maze3D**()

## Properties

### \_currentCol

• `Private` **\_currentCol**: `number` = `0`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:10](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L10)

___

### \_currentLayer

• `Private` **\_currentLayer**: `number` = `0`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:11](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L11)

___

### \_currentRow

• `Private` **\_currentRow**: `number` = `0`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:9](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L9)

___

### \_grid

• `Private` **\_grid**: [`Grid3D`](Grid3D.md)<[`GameNode`](GameNode.md)\> = `null`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:7](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L7)

___

### \_pathCoords

• `Private` **\_pathCoords**: `number`[][]

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:8](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L8)

## Methods

### finalize

▸ **finalize**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:55](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L55)

___

### getCols

▸ **getCols**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:35](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L35)

___

### getCurrentNode

▸ **getCurrentNode**(): [`GameNode`](GameNode.md)

#### Returns

[`GameNode`](GameNode.md)

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:43](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L43)

___

### getData

▸ **getData**(): [`GameNode`](GameNode.md)[][][]

#### Returns

[`GameNode`](GameNode.md)[][][]

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:47](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L47)

___

### getLayers

▸ **getLayers**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:39](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L39)

___

### getRows

▸ **getRows**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:31](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L31)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:51](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L51)

___

### reset

▸ **reset**(`rows`, `cols`, `depth`, `startRow`, `startCol`, `startLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |
| `depth` | `number` |
| `startRow` | `number` |
| `startCol` | `number` |
| `startLayer` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:13](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L13)

___

### step

▸ **step**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/Maze3D.ts:61](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/utils/Maze3D.ts#L61)
