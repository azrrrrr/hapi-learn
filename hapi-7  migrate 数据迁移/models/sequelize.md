## sequelize-cli

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

## migrate

1. 使用 `sequelize migration:create` 来创建一个迁移文件 create-shops-table。

   ```
   node_modules/.bin/sequelize migration:create --name create-shops-table
   
   node_modules/.bin/sequelize migration:create --name create-goods-table
   ```

2. sequelize db:migrate

   migrations 目录下的迁移行为定义，按时间戳的顺序，逐个地执行迁移描述，最终完成数据库表结构的自动化创建。在数据库中会默认创建一个名为 SequelizeMeta 的表，用于记录在当前数据库上所运行的迁移历史版本

   ```
   node_modules/.bin/sequelize db:migrate
   ```

3. sequelize db:migrate:undo

   则可以帮助我们按照 `down` 方法中所定义的规则，回退一个数据库表结构迁移的状态

   ```
   node_modules/.bin/sequelize db:migrate:undo
   ```

   通过使用` sequelize db:migrate:undo:all` 命令撤消所有迁移，可以恢复到初始状态。 我们还可以通过将其名称传递到` --to `选项中来恢复到特定的迁移。 `node_modules/.bin/sequelize db:migrate:undo:all --to xxxxxxxxx-create-shops-table.js`

4. 添加字段

   创建一个名叫 add-columns-to-shops-table 的迁移迁移文件： `node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table` 然后我们向该文件中添加如下代码： 

   ```
   module.exports = {
     up: (queryInterface, Sequelize) => Promise.all([
       queryInterface.addColumn('shops', 'address', { type: Sequelize.STRING }),
     ]),
   
     down: queryInterface => Promise.all([
       queryInterface.removeColumn('shops', 'address'),
     ]),
   };
   ```

## seeders 种子数据填充

1. sequelize seed:create

   这个命令将会在 `seeders` 文件夹中创建一个种子文件。文件名看起来像是 `xxxxxxxxx-init-shops.js`，它遵循相同的 `up/down` 语义，如迁移文件。

   ```
   node_modules/.bin/sequelize seed:create --name init-shops
   ```

   ``````
   // seeders/xxxxxxxxx-init-shops.js
   
   const timestamps = {
     created_at: new Date(),
     updated_at: new Date(),
   };
   
   module.exports = {
     up: queryInterface => queryInterface.bulkInsert(
       'shops',
       [
         { id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps },
         { id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps },
         { id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps },
         { id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps },
       ],
       {},
     ),
   
     down: (queryInterface, Sequelize) => {
       const { Op } = Sequelize;
       // 删除 shop 表 id 为 1，2，3，4 的记录
       return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
     },
   };
   ``````

   

2. sequelize db:seed:all

   将向数据库填充 seeders 目录中所有 `up`方法所定义的数据。

   ```
   node_modules/.bin/sequelize db:seed:all
   ```

3. sequelize db:seed:undo

4. ```
   # 撤销所有的种子
   node_modules/.bin/sequelize db:seed:undo:all
   
   # 撤销指定的种子
   node_modules/.bin/sequelize db:seed:undo --seed XXXXXXXXXXXXXX-demo-user.js
   ```

   