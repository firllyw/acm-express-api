const express = require('express')
const app = express()
let mongo = require('mongoose')
const routerOffice = require('./routes/player')
require('dotenv/config')

var port = process.env.port || 80

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

mongo.connect(process.env.DB_CONN, { useNewUrlParser:true}, () => {
  console.log("DB Connection Established")
})

app.use('/players', routerOffice)

app.listen(port, function() {
    console.log("Serving on :" + port)
})