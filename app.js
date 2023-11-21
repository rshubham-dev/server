const express = require('express');
const dotenv = require('dotenv').config();
const Cors = require('cors');
const router = require('./routes/user.route');

const app = express();

// midellware
app.use(Cors());
app.use(express.json({limit:"24mb"}));
app.use(express.urlencoded({extended:true, limit:"24mb"}))
app.use('/api/v1/user', router);

app.get('/', (req, res)=>{
    res.send("Hello World");
})

module.exports = app;