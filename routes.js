
let express = require('express')
let server = express()

server.get('/', (req,res)=>{
    res.render('../views/index')

})

server.get('/sudoku', (req,res)=>{

    
})

module.exports = server