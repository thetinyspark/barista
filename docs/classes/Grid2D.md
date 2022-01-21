---
title: "Class: Grid2D<T>"
linkTitle: "Grid2D"
slug: "Grid2D"
---

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Grid2D.md#constructor)

### Properties

- [\_map](Grid2D.md#_map)
- [\_numCols](Grid2D.md#_numcols)
- [\_numRows](Grid2D.md#_numrows)

### Accessors

- [data](Grid2D.md#data)
- [numCols](Grid2D.md#numcols)
- [numRows](Grid2D.md#numrows)

### Methods

- [addAt](Grid2D.md#addat)
- [destroy](Grid2D.md#destroy)
- [extract](Grid2D.md#extract)
- [forEach](Grid2D.md#foreach)
- [getAt](Grid2D.md#getat)
- [getBottom](Grid2D.md#getbottom)
- [getBottomLeft](Grid2D.md#getbottomleft)
- [getBottomRight](Grid2D.md#getbottomright)
- [getLeft](Grid2D.md#getleft)
- [getNeighbours](Grid2D.md#getneighbours)
- [getRight](Grid2D.md#getright)
- [getTop](Grid2D.md#gettop)
- [getTopLeft](Grid2D.md#gettopleft)
- [getTopRight](Grid2D.md#gettopright)
- [isOutOfBounds](Grid2D.md#isoutofbounds)
- [map](Grid2D.md#map)
- [removeAt](Grid2D.md#removeat)
- [reset](Grid2D.md#reset)
- [from](Grid2D.md#from)

## Constructors

### constructor

• **new Grid2D**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:6](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L6)

## Properties

### \_map

• `Private` **\_map**: `T`[][] \| ``null``[][] = `[]`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:2](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L2)

___

### \_numCols

• `Private` **\_numCols**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:4](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L4)

___

### \_numRows

• `Private` **\_numRows**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:3](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L3)

## Accessors

### data

• `get` **data**(): `T`[][] \| ``null``[][]

#### Returns

`T`[][] \| ``null``[][]

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:148](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L148)

___

### numCols

• `get` **numCols**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:140](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L140)

___

### numRows

• `get` **numRows**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:144](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L144)

## Methods

### addAt

▸ **addAt**(`row`, `col`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:81](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L81)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:23](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L23)

___

### extract

▸ **extract**(`fromRow`, `toRow`, `fromCol`, `toCol`): [`Grid2D`](Grid2D.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromRow` | `number` |
| `toRow` | `number` |
| `fromCol` | `number` |
| `toCol` | `number` |

#### Returns

[`Grid2D`](Grid2D.md)<`T`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:120](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L120)

___

### forEach

▸ **forEach**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`value`: `T`, `row`: `number`, `col`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:99](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L99)

___

### getAt

▸ **getAt**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:75](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L75)

___

### getBottom

▸ **getBottom**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:51](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L51)

___

### getBottomLeft

▸ **getBottomLeft**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:55](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L55)

___

### getBottomRight

▸ **getBottomRight**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:59](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L59)

___

### getLeft

▸ **getLeft**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:43](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L43)

___

### getNeighbours

▸ **getNeighbours**(`row`, `col`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bottom` | `T` |
| `bottomLeft` | `T` |
| `bottomRight` | `T` |
| `center` | `T` |
| `left` | `T` |
| `right` | `T` |
| `top` | `T` |
| `topLeft` | `T` |
| `topRight` | `T` |

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:29](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L29)

___

### getRight

▸ **getRight**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:47](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L47)

___

### getTop

▸ **getTop**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:63](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L63)

___

### getTopLeft

▸ **getTopLeft**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:67](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L67)

___

### getTopRight

▸ **getTopRight**(`row`, `col`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:71](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L71)

___

### isOutOfBounds

▸ **isOutOfBounds**(`row`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:93](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L93)

___

### map

▸ **map**<`U`\>(`func`): [`Grid2D`](Grid2D.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`value`: `T`, `row`: `number`, `col`: `number`) => `U` |

#### Returns

[`Grid2D`](Grid2D.md)<`U`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:107](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L107)

___

### removeAt

▸ **removeAt**(`row`, `col`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:87](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L87)

___

### reset

▸ **reset**(`rows`, `cols`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:8](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L8)

___

### from

▸ `Static` **from**<`T`\>(`data`): [`Grid2D`](Grid2D.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[][] |

#### Returns

[`Grid2D`](Grid2D.md)<`T`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid2D.ts:152](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/partitioning/grid/Grid2D.ts#L152)
