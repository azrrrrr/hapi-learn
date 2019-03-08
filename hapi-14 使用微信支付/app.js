const Hapi = require('hapi');

const config = require('./config');

require('env2')('./.env');

const pluginHapiSwagger = require('./plugins/hapi-swagger.js');
const pluginHapiPagination = require('./plugins/hapi-pagination.js');

const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2.js');

const routesHello = require('./routes/hello.js');
const routesShops = require('./routes/shops.js');
const routesGoods = require('./routes/orders.js');
const routesUsers = require('./routes/users.js');

const server = new Hapi.Server();

server.connection({port:3000, host: '127.0.0.1'});

const init = async() => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination,
    hapiAuthJWT2,
   
  ]);
  server.route([
    ...routesHello,
    ...routesShops,
    ...routesGoods,
    ...routesUsers,
  ]);
  await server.start();
  console.log(`O(∩_∩)O哈哈~ ${server.info.uri}`);
};
init();