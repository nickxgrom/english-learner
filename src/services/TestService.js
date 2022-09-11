const WordModel = require('../models/Word')

module.exports = {
    getTest: async (wordsAmount) => {
        // TODO: переделать проверку на количество записей в бд и сколько запрашивает
        const { count, rows } = await WordModel.findAndCountAll()
        if (count < wordsAmount) {
            return 'В базе нет запрашиваемого количества слов'
        }
            let randomWords = []
        for (let i = 0; i < wordsAmount; i++) {
            const randomItemIndex = Math.floor(Math.random()*rows.length)
            randomWords.push(rows.splice(randomItemIndex, 1))
        }
        return randomWords
    },
    checkTest: async (words) => {
        let result = []
        for (let word of words) {
            const { id, translation, targetLang } = word
            result.push(await checkWord(id, translation, targetLang))
        }
        return result
    }
}

async function checkWord(wordId, translation, targetLang) {
    const word = await WordModel.findByPk(wordId)
    return {
        id: wordId,
        // TODO: возможно необходимо переделать
        passed: word[`word_variants_${targetLang}`].includes(translation)
    }
}