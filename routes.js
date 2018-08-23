
let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
        res.render('./partials/welcome')
})

router.get('/sudoku', (req,res) => {
        res.render('./partials/sudoku')
})

module.exports = router
