const {env} = process;
const config = {
  host: env.HOST,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
  wxAppId: env.AppId,
  wxAppSecret: env.AppSecret,
}
module.exports = config;