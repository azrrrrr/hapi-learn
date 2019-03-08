1. 安装 
```
  npm i sequelize-cli -D
  npm i sequelize
  npm i mysql2
```
2. sequelize-cli

```
node_modules/.bin/sequelize init
```

```
├── config                       # 项目配置目录

|   ├── config.json              # 数据库连接的配置

├── models                       # 数据库 model

|   ├── index.js                 # 数据库连接的样板代码

├── migrations                   # 数据迁移的目录

├── seeders                      # 数据填充的目录

```

3. config/config.js

   ```
   if(process.env.NODE_ENV === 'production') {
     require('env2')('./.env.prod');
   }else {
     require('env2')('./.env');
   }
   
   const {env} = process;
   
   mpdule.exports = {
     "development": {
       "username": env.MYSQL_USERNAME,
       "password": env.MYSQL_PASSWORD,
       "database": env.MYSQL_DB_NAME,
       "host": env.MYSQL_HOST,
       "port": env.MYSQL_PORT,
       "dialect": "mysql",
       // 解决高版本 sequelize 连接警告
       "operatorsAliases": false,
     },
     "production": {
       "username": env.MYSQL_USERNAME,
       "password": env.MYSQL_PASSWORD,
       "database": env.MYSQL_DB_NAME,
       "host": env.MYSQL_HOST,
       "port": env.MYSQL_PORT,
       "dialect": "mysql",
       // 解决高版本 sequelize 连接警告
       "operatorsAliases": false,
     }
   }
   ```

   .env 

   ```
   # 需要安装env2
   HOST = 127.0.0.1
   PORT = 3000
   
   
   MYSQL_HOST = your-host
   # 一般是3306
   MYSQL_PORT = your-port
   MYSQL_DB_NAME = your-db-name
   MYSQL_USERNAME = your-username
   MYSQL_PASSWORD = your-password
   
   ```

4. 数据库创建

   ``````
   node_modules/.bin/sequelize db:create
   
   # 通过 --env 参数，指定为生产环境创建项目数据库
   # node_modules/.bin/sequelize db:create --env production
   ``````

   