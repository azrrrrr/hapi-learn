const jwtHeaderDefine = require('../utils/router-helper-jwt.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request,reply) => {
      console.log(request.auth.exp);
      console.log('===>', request.auth.credentials);
      reply('hello!');
    },
    config: {
      tags: ['api', 'tests'],
      description: 'test: hello',
      validate: {
        ...jwtHeaderDefine
      },
    }
  }
]
