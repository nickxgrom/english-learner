const TestStatistic = require('../models/TestStatistic')

module.exports = {
    createStatisticNode: async(wordsId, passed, total) => {
        await TestStatistic.create({ wordsId, passed, total })
    },
    getStatistic: async() => {
        const res = (await TestStatistic.findAll())
        return res
    }
}