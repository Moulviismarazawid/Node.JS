const express = require('express')

const app = express()
const port = 3000
app.use(() => {
    console.log(`server sudah terhubung ke port ${port}`)
})

app.listen(port)