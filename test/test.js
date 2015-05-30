'use strict';

var tableHeader = require('..');

var test = require('tape');


var colors = [
  ['red', '#ff0000'],
  ['green', '#00ff00'],
  ['blue', '#0000ff']
];


test('border=false', function (t) {
  t.deepEqual(tableHeader(colors, ['color', 'code'], { border: false }),
              [
                ['color', 'code'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.equal(colors.length, 3);
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
  t.equal(colors.length, 3);
  t.end();
});


test('border=true (default)', function (t) {
  t.deepEqual(tableHeader(colors, ['color', 'code']),
              [
                ['color', 'code'],
                ['-----', '-------'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.deepEqual(tableHeader(colors, ['color', 'code'], { border: true }),
              [
                ['color', 'code'],
                ['-----', '-------'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.equal(colors.length, 3);
  t.end();
});


test('stringLength', function (t) {
  var letterCount = function (s) {
    console.log(s);
    return s.match(/[a-zA-Z]/g).length;
  };

  t.deepEqual(tableHeader(colors, ['color', 'code'], { stringLength: letterCount }),
              [
                ['color', 'code'],
                ['-----', '--'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.equal(colors.length, 3);
  t.end();
});


test('.add', function (t) {
  t.equal(tableHeader.add(colors, ['color', 'code']), undefined);
  t.deepEqual(colors,
              [
                ['color', 'code'],
                ['-----', '-------'],
                ['red', '#ff0000'],
                ['green', '#00ff00'],
                ['blue', '#0000ff']
              ]);
  t.end();
});
