'use strict';

var tableHeader = require('..');

var test = require('tape');


test('example', function (t) {
  var table = [
    ['red', '#ff0000'],
    ['green', '#00ff00'],
    ['blue', '#0000ff']
  ];

  t.deepEqual(tableHeader(table, ['color', 'code'], { border: true }),
              [
                ['color', 'code'],
                ['-----', '-------'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.end();
});
