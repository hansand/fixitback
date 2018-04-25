var  express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

User =require('./models/users');
Role =require('./models/role');
//connect mongoose

mongoose.connect('mongodb://localhost/fixit');
var db = mongoose.connection;

app.get('/',function(req,res){
  res.send("Please use /api/fixit");
});

//getUsers
app.get('/api/fixit/users',function(req,res){
  User.getUsers(function(err,users){
    if(err){
      throw err;
    }
    res.json(users);
  });
});

//addUsers
app.post('/api/fixit/users',function(req,res){

  var user = req.body;
  User.addUsers(user,function(err,user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

//getUsers by Role
app.get('/api/fixit/users/:role',function(req,res){

  var role = req.params.role;
  console.log(333,role);
  let x = User.getUsersByRole({role:role},function(err,users){
    if(err){
      throw err;
    }
    res.json(users);
  });
  console.log(444,x)
});

// add roles
app.post('/api/fixit/roles',function(req,res){
  var role = req.body;
  Role.addRole(role,function(err,role){
    if(err){
      throw err;
    }
    res.json(role);
  });
});

//getRoles
app.get('/api/fixit/roles',function(req,res){
  Role.getRoles(function(err,role){
    if(err){
      throw err;
    }
    res.json(role);
  });
});



app.listen(3000);
console.log("running on port 3000");
