
let express = require('express')
let server = express()

server.get('/', (req,res)=>{
    res.send("Sudokudoku!!!")
})

module.exports = server