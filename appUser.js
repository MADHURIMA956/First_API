const express = require('express');

const appUser = express();

appUser.get('/',(req,res) =>{
    const a = {};
    a.name = "Rani";
    res.send(a)
})