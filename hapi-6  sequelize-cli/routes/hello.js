module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request,reply) => {
      reply('hello!');
    },
    config: {
      tags: ['api', 'tests'],
      description: 'test: hello'
    }
  }
]