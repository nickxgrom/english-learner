const router = require('express').Router(),
    catchError = require('../utils/catchError'),
    WordService = require('../services/WordService')

// добавить новые слова, принимает массив
router.post('/new-words', catchError(async (req, res, next) => {
    req.body.words.forEach(async word => await WordService.addWords(word.wordsEn, word.wordsRu))
    res.sendStatus(200)
}))

// отдает массив всех слов
router.get('/word-list', catchError(async (req, res, next) => {
    const wordList = await WordService.getWordList()
    res.send(wordList).status(200)
}))

// редактирование существующего слова, принимает id
router.patch('/update-word', catchError(async (req, res, next) => {
    await WordService.updateWord(req.query.id, req.body.wordsEn, req.body.wordsRu)
    res.sendStatus(200)
}))

// удаляет слово, принимает id
router.delete('/delete-word', catchError(async (req, res, next) => {
    await WordService.deleteWord(req.query.id)
    res.sendStatus(200)
}))

// возвращает массив слов для теста и id-теста, принимает количество возвращаемых слов
router.get('/get-test', catchError(async (req, res, next) => {

}))

// принимает массив слов для проверки, возвращает результат
router.post('/upload-test', catchError(async (req, res, next) => {

}))

module.exports = router
