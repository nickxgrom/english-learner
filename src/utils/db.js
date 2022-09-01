const { Sequelize } = require('sequelize');

module.exports = new Sequelize('english-learner', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});