const express = require('express')
const path = require("path")

const app = express()

app.get('/', (req, res) => {
    // 1. Just html first
    // res.send('<h1>Hello there</h1>')

    // 2. Then an html file. To do this we have to set up some logic to specify where exactly the file is, since it can't find it with just './index.html'
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(4546, () => console.log(`Take us to warp 4546!`))
