'use strict';

function * index() {
  this.body = 'lol';
}

function * add() {
  this.body = 'lol';
}

module.exports = {
  index: index,
  add: add
}
