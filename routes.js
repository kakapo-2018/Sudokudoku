
let express = require('express')
let server = express()

server.get('/', (req,res)=>{
    res.render('index')

})

server.get('/sudoku', (req,res)=>{

    res.render('partials/sudoku')
})

module.exports = server