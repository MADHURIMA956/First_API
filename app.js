const express = require('express');

const users = require('./user.json');
// console.log(express)

const app = express();

app.use(express.json());

//get

app.get('/',(req,res) => {
   
  return res.send("Welcome to Home page")
  res.send({users})
});


app.get('/users', (req,res) => {
  res.send({users})
})


//post

app.post('/',(req,res) => {
  const newUsers = [...users, req.body];

  res.send(newUsers)
})

//patch

app.patch('/:email', (req,res) => {
  //console.log(req.params.email);

  const newUsers = users.map((user) => {

    if ( req.params.email === user.email ){
      if( req?.body?.first_name) user.first_name = req.body.first_name;
      if( req?.body?.last_name) user.last_name = req.body.last_name
      if( req?.body?.email) user.email = req.body.email
      if( req?.body?.gender) user.gender = req.body.gender
    }
    return user;
  });
  res.send(newUsers);
})

// delete user

app.delete('/:email', (req,res) =>{
  const newUser = users.filter((user) => user.email !== req.params.email);

  res.send(newUser);
});

//get single user

app.get('/:email', (req,res) => {

  const newUser = users.filter((user) => user.email === req.params.email);

  res.send(newUser);
})

app.listen(2345,function(){
    console.log('listenning on port 2345')
})
