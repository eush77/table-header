[![npm](https://nodei.co/npm/table-header.png)](https://nodei.co/npm/table-header/)

# table-header

[![Build Status](https://travis-ci.org/eush77/table-header.svg?branch=master)](https://travis-ci.org/eush77/table-header) [![Dependency Status][david-badge]][david]

Add header to a text table, with border.

Text table is an array of rows of equal length:

```js
var table = [
  ['red', '#ff0000'],
  ['green', '#00ff00'],
  ['blue', '#0000ff']
];
```

[david]: https://david-dm.org/eush77/table-header
[david-badge]: https://david-dm.org/eush77/table-header.png

## Example

```js
var tableHeader = require('table-header');

tableHeader(table, ['color', 'code'])
//=> [
//     ['color', 'code'],
//     ['-----', '-------'],
//     ['red', '#ff0000'],
//     ['green', '#00ff00'],
//     ['blue', '#0000ff']
//   ]
```

## API

### `tableHeader(table, header, [opts])`

Returns a new table with `header` and the same data.

If `opts.border` is `false`, no border is set for a header.

If `opts.border` is a single-character string, it is used to create a border.

If `opts.border` is `true` (the default), the default character is used (`-`).

## Related

- [text-table] module turns these tables to strings.

[text-table]: http://npm.im/text-table

## Install

```
npm install table-header
```

## License

MIT
