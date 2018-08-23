
let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
        res.render('home')
})

router.get('/sudoku', (req,res) => {
        res.render('sudoku')
})

module.exports = router
