'use strict';

let _ = require('koa-route');
let mate = require('./controllers/mate');

let routes = [
  {method: 'get', path: '/mate', action: mate.index},
  {method: 'post', path: '/mate', action: mate.add}
];

module.exports = (app) => {
  routes.map((route) => {
    app.use(_[route.method](route.path, route.action));
  });
}
