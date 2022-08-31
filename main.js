const app = require('express')(),
    router = require('./src/controllers')

app.use(router)