const express = require('express');

const app = express();

app.get('/', ( req , res) => {

    return res.send("Welcome to Home page");
});

app.listen(5001 , function () {

    console.log('listenning on port 5001')
})