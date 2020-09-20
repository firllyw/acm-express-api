const express = require('express');
const app = express();
let mongo = require('mongoose')
require('dotenv').config();
const index = require('./routes');

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
mongo.connect(process.env.DB_CONN, { useNewUrlParser:true}, () => {
  console.log("DB Connection Established")
})

//routes
app.use('/api', index);

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server Starts on ${port}`);
});