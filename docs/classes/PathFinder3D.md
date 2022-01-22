[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / PathFinder3D

# Class: PathFinder3D

## Table of contents

### Constructors

- [constructor](PathFinder3D.md#constructor)

### Properties

- [closed](PathFinder3D.md#closed)
- [opened](PathFinder3D.md#opened)

### Methods

- [\_addToCloseList](PathFinder3D.md#_addtocloselist)
- [\_addToOpenList](PathFinder3D.md#_addtoopenlist)
- [\_isOnCloseList](PathFinder3D.md#_isoncloselist)
- [\_isOnOpenList](PathFinder3D.md#_isonopenlist)
- [createGraphe](PathFinder3D.md#creategraphe)
- [findPath](PathFinder3D.md#findpath)
- [resetGraphe](PathFinder3D.md#resetgraphe)

## Constructors

### constructor

• **new PathFinder3D**()

## Properties

### closed

• `Private` **closed**: [`GameNode`](GameNode.md)[] = `[]`

#### Defined in

[lib/sdk/common/utils/PathFinder3D.ts:6](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L6)

___

### opened

• `Private` **opened**: [`GameNode`](GameNode.md)[] = `[]`

#### Defined in

[lib/sdk/common/utils/PathFinder3D.ts:5](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L5)

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

[lib/sdk/common/utils/PathFinder3D.ts:173](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L173)

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

[lib/sdk/common/utils/PathFinder3D.ts:182](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L182)

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

[lib/sdk/common/utils/PathFinder3D.ts:195](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L195)

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

[lib/sdk/common/utils/PathFinder3D.ts:191](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L191)

___

### createGraphe

▸ **createGraphe**(`grid`, `walkableValue`): [`Grid3D`](Grid3D.md)<[`GameNode`](GameNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `grid` | [`Grid3D`](Grid3D.md)<`number`\> |
| `walkableValue` | `number` |

#### Returns

[`Grid3D`](Grid3D.md)<[`GameNode`](GameNode.md)\>

#### Defined in

[lib/sdk/common/utils/PathFinder3D.ts:8](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L8)

___

### findPath

▸ **findPath**(`graphe`, `startNode`, `endNode`, `allowDiagonals?`): [`GameNode`](GameNode.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphe` | [`Grid3D`](Grid3D.md)<[`GameNode`](GameNode.md)\> | `undefined` |
| `startNode` | [`GameNode`](GameNode.md) | `undefined` |
| `endNode` | [`GameNode`](GameNode.md) | `undefined` |
| `allowDiagonals` | `boolean` | `false` |

#### Returns

[`GameNode`](GameNode.md)[]

#### Defined in

[lib/sdk/common/utils/PathFinder3D.ts:50](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L50)

___

### resetGraphe

▸ **resetGraphe**(`graphe`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphe` | [`Grid3D`](Grid3D.md)<[`GameNode`](GameNode.md)\> |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/PathFinder3D.ts:30](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/utils/PathFinder3D.ts#L30)
