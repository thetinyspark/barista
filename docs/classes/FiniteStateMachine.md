[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / FiniteStateMachine

# Class: FiniteStateMachine

## Table of contents

### Constructors

- [constructor](FiniteStateMachine.md#constructor)

### Properties

- [\_current](FiniteStateMachine.md#_current)
- [\_states](FiniteStateMachine.md#_states)

### Methods

- [addState](FiniteStateMachine.md#addstate)
- [dispatch](FiniteStateMachine.md#dispatch)
- [getCurrentState](FiniteStateMachine.md#getcurrentstate)
- [getStateById](FiniteStateMachine.md#getstatebyid)
- [getStates](FiniteStateMachine.md#getstates)
- [hasState](FiniteStateMachine.md#hasstate)
- [removeState](FiniteStateMachine.md#removestate)
- [reset](FiniteStateMachine.md#reset)
- [setCurrentState](FiniteStateMachine.md#setcurrentstate)

## Constructors

### constructor

• **new FiniteStateMachine**()

## Properties

### \_current

• `Private` **\_current**: [`IState`](../interfaces/IState.md) = `null`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:5](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L5)

___

### \_states

• `Private` **\_states**: [`IState`](../interfaces/IState.md)[] = `[]`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:4](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L4)

## Methods

### addState

▸ **addState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IState`](../interfaces/IState.md) |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:7](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L7)

___

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:28](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L28)

___

### getCurrentState

▸ **getCurrentState**(): [`IState`](../interfaces/IState.md)

#### Returns

[`IState`](../interfaces/IState.md)

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:43](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L43)

___

### getStateById

▸ **getStateById**(`id`): [`IState`](../interfaces/IState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`IState`](../interfaces/IState.md)

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:24](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L24)

___

### getStates

▸ **getStates**(): [`IState`](../interfaces/IState.md)[]

#### Returns

[`IState`](../interfaces/IState.md)[]

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:54](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L54)

___

### hasState

▸ **hasState**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:20](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L20)

___

### removeState

▸ **removeState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IState`](../interfaces/IState.md) |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:11](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L11)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:15](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L15)

___

### setCurrentState

▸ **setCurrentState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IState`](../interfaces/IState.md) |

#### Returns

`void`

#### Defined in

[lib/sdk/common/utils/fsm/FiniteStateMachine.ts:47](https://github.com/thetinyspark/barista/blob/93f33857/lib/sdk/common/utils/fsm/FiniteStateMachine.ts#L47)
