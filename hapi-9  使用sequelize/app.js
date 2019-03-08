const Hapi = require('hapi');

const config = require('./config');

require('env2')('./.env');

const pluginHapiSwagger = require('./plugins/hapi-swagger.js');
const pluginHapiPagination = require('./plugins/hapi-pagination');

const routesHello = require('./routes/hello.js');
const routesShops = require('./routes/shops.js');
const routesGoods = require('./routes/orders.js');

const server = new Hapi.Server();

server.connection({port:3000, host: '127.0.0.1'});

// TODO：由于生成的port不一样 暂时改回
// server.connection({port:config.port, host: config.host});

const init = async() => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination,
  ])
  server.route([
    ...routesHello,
    ...routesShops,
    ...routesGoods,
  ]);
  await server.start();
  console.log(`O(∩_∩)O哈哈~ ${server.info.uri}`);
};
init();