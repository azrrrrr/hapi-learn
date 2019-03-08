const Hapi = require('hapi');

const config = require('./config');

require('env2')('./.env');

const routesHello = require('./routes/hello.js');

const server = new Hapi.Server();

// server.connection({port:3000, host: '127.0.0.1'});

server.connection({port:config.port, host: config.host});

const init = async() => {
  server.route([
    ...routesHello,
    
  ]);
  await server.start();
  console.log(`O(∩_∩)O哈哈~ ${server.info.uri}`);
};
init();