const router = require('express').Router(),
    catchError = require('../utils/catchError')

// добавить новые слова, принимает массив
router.post('/new-words', catchError(async (req, res, next) => {

}))

// отдает массив всех слов
router.get('/word-list', catchError(async (req, res, next) => {

}))

// редактирование существующего слова, принимает id
router.patch('/update-word', catchError(async (req, res, next) => {

}))

// удаляет слово, принимает id
router.delete('/delete-word', catchError(async (req, res, next) => {

}))

// возвращает массив слов для теста и id-теста, принимает количество возвращаемых слов
router.get('/get-test', catchError(async (req, res, next) => {

}))

// принимает массив слов для проверки, возвращает результат
router.post('/upload-test', catchError(async (req, res, next) => {

}))

module.exports = router
