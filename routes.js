
let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
    let num = 0
    if(num === 0) {
        res.render('home')
    } else {
        res.render('sudoku')
    } 
})

module.exports = router
