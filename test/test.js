'use strict';

var tableHeader = require('..');

var test = require('tape');


var colors = [
  ['red', '#ff0000'],
  ['green', '#00ff00'],
  ['blue', '#0000ff']
];


test('border=false (default)', function (t) {
  t.deepEqual(tableHeader(colors, ['color', 'code']),
              [
                ['color', 'code'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.deepEqual(tableHeader(colors, ['color', 'code'], { border: false }),
              [
                ['color', 'code'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.end();
});


test('border=true', function (t) {
  t.deepEqual(tableHeader(colors, ['color', 'code'], { border: true }),
              [
                ['color', 'code'],
                ['-----', '-------'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.end();
});


test('border="_"', function (t) {
  t.deepEqual(tableHeader(colors, ['color', 'code'], { border: '.' }),
              [
                ['color', 'code'],
                ['.....', '.......'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.end();
});
