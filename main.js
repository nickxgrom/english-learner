const app = require('express')(),
    router = require('./src/controllers'),
    db = require('./src/utils/db'),
    bodyParser = require('body-parser'),
    PORT = 3000,
    cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(router)

app.listen(PORT, async () => {
    await db.sync()
    console.log(`Server listening http://localhost:${PORT}`)
})