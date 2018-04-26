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
Shop =require('./models/shop');
FeedBack=require('./models/feedback');

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
  console.log("Adding");
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

//getUsers by ID
app.get('/api/fixit/users/getid/:id',function(req,res){

  var id = req.params.id;
  console.log(333,id);
  let x = User.getUsersById({_id:id},function(err,users){
    if(err){
      throw err;
    }
    res.json(users);
  });
  
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

//addShop
app.post('/api/fixit/shops',function(req,res){
  var shop = req.body;
  Shop.addShop(shop,function(err,shop){
    if(err){
      throw err;
    }
    res.json(shop);
  });
});

//getShops
app.get('/api/fixit/shops',function(req,res){
  console.log("shop");
  Shop.getShops(function(err,shop){
    if(err){
      throw err;
    }
    res.json(shop);
  });
});

//get Shops by Catofory
app.get('/api/fixit/shops/:catogory',function(req,res){

  var catogory = req.params.catogory;
  console.log(333,catogory);
  let x = Shop.getShopsByCatogory({shopCatogory:catogory},function(err,shop){
    if(err){
      throw err;
    }
    res.json(shop);
  });
  console.log(444,x)
});

//getUsers by ID
app.get('/api/fixit/shops/getid/:id',function(req,res){

  var id = req.params.id;
  console.log(333,id);
  let x = Shop.getShopById({_id:id},function(err,shops){
    if(err){
      throw err;
    }
    res.json(shops);
  });
});

// add FeedBack
app.post('/api/fixit/feedback',function(req,res){
  console.log("dd");
  var feedback = req.body;
  FeedBack.addFeedBack(feedback,function(err,feedback){
    if(err){
      throw err;
    }
    res.json(feedback);
  });
});

//get Feed BAcks by ID
app.get('/api/fixit/feedback/empid/:empid',function(req,res){

  var empid = req.params.empid;
  let x = FeedBack.getFeedBackByEmp({empID:empid},function(err,feedback){
    if(err){
      throw err;
    }
    res.json(feedback);
  });
});



app.listen(3000);
console.log("running on port 3000");
