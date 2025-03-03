'use strict';
require('dotenv').config()

const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/',(req,res)=>{
    console.log(`hello there!`);
});

app.listen(port,() => {
                console.log(`listening on port ${port}`);
            });

app.get('/login',(req,res)=>{
    console.log(`you are at login page`);
});


app.get('/hello',(req,res)=>{
    console.log(`<h1>This is another trial by Admin</h1>`);
});


