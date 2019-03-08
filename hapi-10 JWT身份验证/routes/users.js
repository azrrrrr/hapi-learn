const JWT = require('jsonwebtoken');

const config = require('../config');

const GROUP_NAME = 'users';

module.exports = [{
  method: 'POST',
  path: `/${GROUP_NAME}/createJWT`,
  handler: async (request,reply) => {
    const generateJWT = (jwtInfo) => {
      const payload = {
        userId: jwtInfo.userId,
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
      };
      return JWT.sign(payload, process.env.JWT_SECRET);
    };
    reply(generateJWT({ userId: 1 }))
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '测试 JWT',
    auth: false,
  }
}]

// swagger 中Response Bodyv
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cCI6MTU0MDM2NjMyNCwiaWF0IjoxNTM5NzYxNTI0fQ.frU-YPfypgcw7yIGd85Ehophus_hKSdgN9rf1Ta2iYY

// https://jwt.io/  解码确定是否有userId
