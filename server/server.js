const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/auth_db');

const {User} = require('./model/user');
//Lay du lieu kieu json tu body cua post
app.use(bodyParser.json());


//POST
app.post('api/user',(req,res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save((err,doc)=>{
        if(err) return res.status(400).send(doc)
        res.status(200).send(doc)
    })


})






const Port = process.env.Port || 2308;

app.listen(Port, ()=>{
    console.log(`Started on ${Port}`)
})

