const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

const dotenv = require('dotenv').config



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "/views/login.html"));
});


app.listen(3003, () => 
    console.log('Servidor 3003 corriendo'))