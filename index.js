'use strict';

var repeat = require('repeat-string');


var rowWidths = function (row) {
  return row.map(function (cell) {
    return String(cell).length;
  });
};


var columnWidths = function (table) {
  return table.reduce(function (widths, row) {
    rowWidths(row).forEach(function (width, i) {
      if (widths[i] < width) {
        widths[i] = width;
      }
    });
    return widths;
  }, table[0].map(function () { return 0 }));
};


module.exports = function (table, header, opts) {
  opts = opts || {};
  header = [header];

  if (opts.border) {
    if (opts.border == true) {
      opts.border = '-';
    }
    header.push(columnWidths(table).map(function (width) {
      return repeat(opts.border, width);
    }));
  }

  return header.concat(table);
};
