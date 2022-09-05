const WordModel = require('../models/Word')

module.exports = {
    addWords: async (wordsEn, wordsRu) => {
        await WordModel.create({
            word_variants_en: wordsEn.join(','),
            word_variants_ru: wordsRu.join(',')
        })
    },
    getWordList: async () => {
        return await WordModel.findAll()
    },
    updateWord: async (id, wordsEn, wordsRu) => {
        await WordModel.update({
            word_variants_en: wordsEn.join(','),
            word_variants_ru: wordsRu.join(',')
        }, { where: { id }})
    },
    deleteWord: async (id) => {
        await WordModel.destroy({ where: { id } })
    }
}