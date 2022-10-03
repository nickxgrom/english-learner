const { DataTypes } = require('sequelize'),
    db = require('../utils/db')

module.exports = db.define('statistic', {
    wordsId: DataTypes.STRING,
    passed: DataTypes.INTEGER,
    total: DataTypes.INTEGER
}, {
    timestamps: false
})