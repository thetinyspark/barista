---
title: "Class: AssetsManager"
linkTitle: "AssetsManager"
slug: "AssetsManager"
---

An AssetsManager is used to load,retrieve,transform assets.
You can load assets one by one or massively with queue.

## Hierarchy

- [`Emitter`](Emitter.md)

  ↳ **`AssetsManager`**

## Table of contents

### Constructors

- [constructor](AssetsManager.md#constructor)

### Properties

- [data](AssetsManager.md#data)
- [list](AssetsManager.md#list)
- [uris](AssetsManager.md#uris)

### Methods

- [\_errorHandler](AssetsManager.md#_errorhandler)
- [\_loadBlob](AssetsManager.md#_loadblob)
- [delete](AssetsManager.md#delete)
- [destroy](AssetsManager.md#destroy)
- [emit](AssetsManager.md#emit)
- [freeQueue](AssetsManager.md#freequeue)
- [get](AssetsManager.md#get)
- [getAll](AssetsManager.md#getall)
- [getQueue](AssetsManager.md#getqueue)
- [getUri](AssetsManager.md#geturi)
- [getUris](AssetsManager.md#geturis)
- [hasObservers](AssetsManager.md#hasobservers)
- [isObserver](AssetsManager.md#isobserver)
- [load](AssetsManager.md#load)
- [loadQueue](AssetsManager.md#loadqueue)
- [queue](AssetsManager.md#queue)
- [set](AssetsManager.md#set)
- [subscribe](AssetsManager.md#subscribe)
- [unsubscribe](AssetsManager.md#unsubscribe)
- [unsubscribeAll](AssetsManager.md#unsubscribeall)
- [blobToImage](AssetsManager.md#blobtoimage)
- [blobToJSON](AssetsManager.md#blobtojson)
- [blobToSound](AssetsManager.md#blobtosound)
- [blobToVideo](AssetsManager.md#blobtovideo)

## Constructors

### constructor

• **new AssetsManager**()

#### Overrides

[Emitter](Emitter.md).[constructor](Emitter.md#constructor)

#### Defined in

[lib/core/assets/AssetsManager.ts:13](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L13)

## Properties

### data

• `Private` **data**: `Map`<`string`, `any`\>

#### Defined in

[lib/core/assets/AssetsManager.ts:10](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L10)

___

### list

• `Private` **list**: `any`[]

#### Defined in

[lib/core/assets/AssetsManager.ts:11](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L11)

___

### uris

• `Private` **uris**: `Map`<`string`, `string`\>

#### Defined in

[lib/core/assets/AssetsManager.ts:9](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L9)

## Methods

### \_errorHandler

▸ `Private` **_errorHandler**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Defined in

[lib/core/assets/AssetsManager.ts:161](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L161)

___

### \_loadBlob

▸ `Private` **_loadBlob**(`uri`): `Promise`<`void` \| `Blob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`void` \| `Blob`\>

#### Defined in

[lib/core/assets/AssetsManager.ts:165](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L165)

___

### delete

▸ **delete**(`alias`): `boolean`

Delete the data associated to a specific alias and returns boolean if it has been well deleted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | string the loaded data alias |

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/assets/AssetsManager.ts:150](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L150)

___

### destroy

▸ **destroy**(): `void`

Clear all loaded datas

#### Returns

`void`

#### Defined in

[lib/core/assets/AssetsManager.ts:157](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L157)

___

### emit

▸ **emit**(`eventType`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `payload` | `any` |

#### Returns

`void`

#### Inherited from

[Emitter](Emitter.md).[emit](Emitter.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### freeQueue

▸ **freeQueue**(): `void`

Free the current queue

#### Returns

`void`

#### Defined in

[lib/core/assets/AssetsManager.ts:48](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L48)

___

### get

▸ **get**(`alias`): `any`

Returns the data associated to a specific alias

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | string the loaded data alias |

#### Returns

`any`

any

#### Defined in

[lib/core/assets/AssetsManager.ts:93](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L93)

___

### getAll

▸ **getAll**(): `Map`<`string`, `any`\>

Returns all loaded data

#### Returns

`Map`<`string`, `any`\>

Map<string,any> loaded datas

#### Defined in

[lib/core/assets/AssetsManager.ts:23](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L23)

___

### getQueue

▸ **getQueue**(): `any`[]

Returns the current queue

#### Returns

`any`[]

any[] the current queue

#### Defined in

[lib/core/assets/AssetsManager.ts:41](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L41)

___

### getUri

▸ **getUri**(`alias`): `string`

Returns the current uri of the loaded data associated to a specific alias

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | string the loaded data alias |

#### Returns

`string`

string

#### Defined in

[lib/core/assets/AssetsManager.ts:84](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L84)

___

### getUris

▸ **getUris**(): `any`

Returns all the uris of all the loaded data associated to the corresponding aliases

#### Returns

`any`

any

#### Defined in

[lib/core/assets/AssetsManager.ts:69](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L69)

___

### hasObservers

▸ **hasObservers**(`eventType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |

#### Returns

`boolean`

#### Inherited from

[Emitter](Emitter.md).[hasObservers](Emitter.md#hasobservers)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:5

___

### isObserver

▸ **isObserver**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Inherited from

[Emitter](Emitter.md).[isObserver](Emitter.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### load

▸ **load**(`uri`, `type?`, `alias`): `Promise`<`any`\>

Loads an assets and return a Promise<any> where any represents the loaded data.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uri` | `string` | `undefined` | string the asset's uri you want to load |
| `type` | `string` | `JSON_TYPE` | string the asset's type |
| `alias` | `string` | `undefined` | string the asset's alias |

#### Returns

`Promise`<`any`\>

Promise<any>

#### Defined in

[lib/core/assets/AssetsManager.ts:104](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L104)

___

### loadQueue

▸ **loadQueue**(): `Promise`<`any`[]\>

Loads the queue and return a Promise<any[]> when any[] represents all the loaded data

#### Returns

`Promise`<`any`[]\>

Promise<any[]>

#### Defined in

[lib/core/assets/AssetsManager.ts:56](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L56)

___

### queue

▸ **queue**(`uri`, `type?`, `alias`): `void`

Pushes a new assets to load on the queue

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uri` | `string` | `undefined` | string the asset's uri |
| `type` | `string` | `JSON_TYPE` | string the asset's type |
| `alias` | `string` | `undefined` | string the asset's alias |

#### Returns

`void`

#### Defined in

[lib/core/assets/AssetsManager.ts:33](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L33)

___

### set

▸ **set**(`data`, `alias`, `uri?`): `void`

Sets a specific data and associate it with an alias and an uri

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `any` | `undefined` | any the specific data |
| `alias` | `string` | `undefined` | string the specific data's alias |
| `uri` | `string` | `""` | string the specific data's uri |

#### Returns

`void`

#### Defined in

[lib/core/assets/AssetsManager.ts:140](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L140)

___

### subscribe

▸ **subscribe**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Inherited from

[Emitter](Emitter.md).[subscribe](Emitter.md#subscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:8

___

### unsubscribe

▸ **unsubscribe**(`eventType`, `observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`void`

#### Inherited from

[Emitter](Emitter.md).[unsubscribe](Emitter.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[Emitter](Emitter.md).[unsubscribeAll](Emitter.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9

___

### blobToImage

▸ `Static` **blobToImage**(`data`): `Promise`<`HTMLImageElement`\>

Converts a Blob into an Image Object .

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Blob` | Blob |

#### Returns

`Promise`<`HTMLImageElement`\>

Promise<HTMLImageElement>

#### Defined in

[lib/core/assets/AssetsManager.ts:237](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L237)

___

### blobToJSON

▸ `Static` **blobToJSON**(`data`): `Promise`<`any`\>

Converts a Blob into an JSON Object .

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Blob` | Blob |

#### Returns

`Promise`<`any`\>

Promise<any>

#### Defined in

[lib/core/assets/AssetsManager.ts:217](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L217)

___

### blobToSound

▸ `Static` **blobToSound**(`data`): `Promise`<`HTMLAudioElement`\>

Converts a Blob into an HTMLAudioElement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Blob` | Blob |

#### Returns

`Promise`<`HTMLAudioElement`\>

Promise<HTMLAudioElement>

#### Defined in

[lib/core/assets/AssetsManager.ts:185](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L185)

___

### blobToVideo

▸ `Static` **blobToVideo**(`data`): `Promise`<`HTMLVideoElement`\>

Converts a Blob into an HTMLVideoElement Object .

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Blob` | Blob |

#### Returns

`Promise`<`HTMLVideoElement`\>

Promise<HTMLVideoElement>

#### Defined in

[lib/core/assets/AssetsManager.ts:268](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/assets/AssetsManager.ts#L268)
