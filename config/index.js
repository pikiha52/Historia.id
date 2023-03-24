const { dbUsername, dbPass, dbName, dbHost, dbPort } = require("./constant");

const conf = {};
conf.environment = 'development';
conf.sequelize = {};
conf.sequelize.username = dbUsername;
conf.sequelize.password = dbPass;
conf.sequelize.database = dbName;
conf.sequelize.host = dbHost;
conf.sequelize.dialect = 'mysql';
conf.sequelize.port = dbPort;
conf.sequelize.define = {
    charset: 'utf8mb4',
    dialectOptions: {
        collate: 'utf8mb4_unicode_ci'
    }
}
conf.ROUND_SALT = 8;
module.exports = conf;