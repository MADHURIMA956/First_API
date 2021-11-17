const express = require('express');

// console.log(express)

const app = express();

app.get('/',(req,res) => {
   
  return  res.send("Welcome to Home page")
})

app.listen(2345,function(){
    console.log('listenning on port 2345')
})
