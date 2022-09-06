const WordModel = require('../models/Word')

module.exports = {
    getTest: async (wordsAmount) => {
        // TODO: добавить проверку на количество записей в бд и сколько запрашивает
        const { count, rows } = await WordModel.findAndCountAll()
        let randomWords = []
        for (let i = 0; i < wordsAmount; i++) {
            const randomItemIndex = Math.floor(Math.random()*rows.length)
            randomWords.push(rows.splice(randomItemIndex, 1))
        }
        return randomWords
    }
}