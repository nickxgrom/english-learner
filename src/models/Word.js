const { DataTypes } = require('sequelize'),
    db = require('../utils/db')

module.exports = db.define('words', {
    word_variants_en: DataTypes.STRING,
    word_variants_ru: DataTypes.STRING,
}, {
    timestamps: false
})