'use strict';

let koa = require('koa');
let routes = require('./routes');

let app = module.exports = koa();

routes(app);

if (!module.parent) {
  app.listen(1337);
  console.log('listening on port 1337');
}

