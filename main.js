const app = require('express')(),
    router = require('./src/controllers'),
    db = require('./src/utils/db'),
    PORT = 3000

app.use(router)

app.listen(PORT, async () => {
    await db.sync()
    console.log(`Server listening http://localhost:${PORT}`)
})