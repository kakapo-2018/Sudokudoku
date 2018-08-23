var path = require('path')
let routes = require('./routes')
let express = require('express')
let hbs = require('express-handlebars')
let server = express()


var hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}

server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

server.use(express.urlencoded({extended:false}))
server.use(express.static(path.join(__dirname, '')))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', routes)

module.exports = server
