const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const  path = require('path');
const connectDB = require('./server/database/connection');
// const { Connection } = require("mongoose");

const app = express();

dotenv.config({
    path: 'config.env'
})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// MONGODB Connection
// ERROR
connectDB();

// parse request to bodyparser
app.use(bodyparser.urlencoded({extended: true}))

//set View  engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// Load routes
app.use('/',require('./server/routes/routes'))


app.listen(PORT, ()=> {
    console.log('Server running on http://localhost:'+PORT)
})