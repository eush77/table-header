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


var addHeader = function (table, header, opts) {
  opts = opts || {};
  if (opts.border == null) {
    opts.border = true;
  }

  if (opts.border) {
    if (opts.border == true) {
      opts.border = '-';
    }
    table.unshift(columnWidths(table).map(function (width) {
      return repeat(opts.border, width);
    }));
  }

  table.unshift(header);
};


exports = module.exports = function (table, header, opts) {
  table = table.slice();
  addHeader(table, header, opts);
  return table;
};

exports.add = addHeader;
