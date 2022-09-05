const { Sequelize } = require('sequelize');

module.exports = new Sequelize('english_learner', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});