# CID Tools

> A JS module and command line tool for converting, formatting and discovering properties of CIDs

## Install

* Install Node.js 8+

```sh
npm install -g cid-tool # for command line usage
# or
npm install cid-tool    # for programmatic usage
```

## Usage

### CLI

```console
$ cid
cid <command>

Commands:
  cid base32 [cids...]  Convert CIDs to base 32 CID version 1.
  cid bases             List available multibase encoding names.
  cid codecs            List available CID codec names.
  cid hashes            List available multihash hashing algorithm
                        names.

Options:
  --version  Show version number                            [boolean]
  --help     Show help                                      [boolean]
```

### Module

```js
const CIDTool = require('cid-tool')
// Then see API docs below...
```

## API

### `CIDTool.base32(cids)`

Convert the passed CID(s) to base 32 CID version 1.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| cids | `Array`/|[`CID`](https://github.com/ipld/js-cid/)/|`String`/|`Buffer` | CID or CIDs to convert. |

#### Returns

| Type | Description |
|------|-------------|
| `Array<String>` | Base 32 encoded version 1 CIDs |

### `CIDTool.bases()`

List available multibase encoding name and code pairs.

#### Returns

| Type | Description |
|------|-------------|
| `Array<{name<String>, code<Number>}>` | Multibase encoding name and code pairs |

### `CIDTool.codecs()`

List available CID codec name and code pairs.

#### Returns

| Type | Description |
|------|-------------|
| `Array<{name<String>, code<Number>}>` | CID codec name and code pairs |

### `CIDTool.hashes()`

List available multihash hashing algorithm name and code pairs.

#### Returns

| Type | Description |
|------|-------------|
| `Array<{name<String>, code<Number>}>` | Multihash hashing algorithm name and code pairs |

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs-shipyard/cid-tool/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

### Want to hack on IPFS?

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

Copyright (c) Protocol Labs, Inc. under the **MIT License**. See [LICENSE](./LICENSE) for details.
