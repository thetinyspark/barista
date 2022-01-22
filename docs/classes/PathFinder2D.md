[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / PathFinder2D

# Class: PathFinder2D

## Table of contents

### Constructors

- [constructor](PathFinder2D.md#constructor)

### Properties

- [closed](PathFinder2D.md#closed)
- [opened](PathFinder2D.md#opened)

### Methods

- [\_addToCloseList](PathFinder2D.md#_addtocloselist)
- [\_addToOpenList](PathFinder2D.md#_addtoopenlist)
- [\_isOnCloseList](PathFinder2D.md#_isoncloselist)
- [\_isOnOpenList](PathFinder2D.md#_isonopenlist)
- [createGraphe](PathFinder2D.md#creategraphe)
- [findPath](PathFinder2D.md#findpath)
- [resetGraphe](PathFinder2D.md#resetgraphe)

## Constructors

### constructor

• **new PathFinder2D**()

## Properties

### closed

• `Private` **closed**: [`GameNode`](GameNode.md)[] = `[]`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:6](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L6)

___

### opened

• `Private` **opened**: [`GameNode`](GameNode.md)[] = `[]`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:5](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L5)

## Methods

### \_addToCloseList

▸ `Private` **_addToCloseList**(`param_node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param_node` | `any` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:155](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L155)

___

### \_addToOpenList

▸ `Private` **_addToOpenList**(`param_node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param_node` | `any` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:164](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L164)

___

### \_isOnCloseList

▸ `Private` **_isOnCloseList**(`param_node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param_node` | `any` |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:177](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L177)

___

### \_isOnOpenList

▸ `Private` **_isOnOpenList**(`param_node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param_node` | `any` |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:173](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L173)

___

### createGraphe

▸ **createGraphe**(`grid`, `walkableValue`): [`Grid2D`](Grid2D.md)<[`GameNode`](GameNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `grid` | [`Grid2D`](Grid2D.md)<`number`\> |
| `walkableValue` | `number` |

#### Returns

[`Grid2D`](Grid2D.md)<[`GameNode`](GameNode.md)\>

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:8](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L8)

___

### findPath

▸ **findPath**(`graphe`, `startNode`, `endNode`, `allowDiagonals?`): [`GameNode`](GameNode.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphe` | [`Grid2D`](Grid2D.md)<[`GameNode`](GameNode.md)\> | `undefined` |
| `startNode` | [`GameNode`](GameNode.md) | `undefined` |
| `endNode` | [`GameNode`](GameNode.md) | `undefined` |
| `allowDiagonals` | `boolean` | `false` |

#### Returns

[`GameNode`](GameNode.md)[]

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:48](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L48)

___

### resetGraphe

▸ **resetGraphe**(`graphe`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphe` | [`Grid2D`](Grid2D.md)<[`GameNode`](GameNode.md)\> |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/PathFinder2D.ts:29](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder2D.ts#L29)
