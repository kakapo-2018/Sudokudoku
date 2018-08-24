
let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
        res.render('./partials/welcome')
})

router.get('/sudoku-beginner', (req,res) => {
        res.render('./partials/sudoku')
})

router.get('/sudoku-intermediate', (req,res) => {
        res.render('./partials/sudoku')
})

router.get('/sudoku-advanced', (req,res) => {
        res.render('./partials/sudoku')
})

module.exports = router
