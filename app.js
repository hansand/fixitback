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
Work=require('./models/work');
Job=require('./models/job');
wFeedback=require('./models/workfeedback');
JobReq=require('./models/jobreq');
Order=require('./models/order');



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
app.get('/api/fixit/users/roleid/:role/:id',function(req,res){

  var role = req.params.role;
  var id = req.params.id;
  console.log(333,role);
  let x = User.getUsersByRole({role:role,_id:{$ne:id}},function(err,users){
    if(err){
      throw err;
    }
    res.json(users);
  });
  console.log(444,x)
});

//getUsers by ID,
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

//updateUserFeedback
app.put('/api/fixit/users/getid/:id',function(req,res){
  var id=req.params.id;
  var user=req.body;

  User.updateUser(id,user,function(err,user){
      if(err){
          throw err;
      }
      res.json(user);
  })
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

  var cus= "Customer";
  // console.log(333,id);
  let x = Role.getRoles({roleName:{$ne:cus}},function(err,role){
    if(err){
      throw err;
    }
    res.json(role);
  });
});

//getRoles
// app.get('/api/fixit/roles',function(req,res){
//   Role.getRoles(function(err,role){
//     if(err){
//       throw err;
//     }
//     res.json(role);
//   });
// });

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

//getShops by ID
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

//getUsers by Login
app.get('/api/fixit/users/login/:email/:password',function(req,res){

  var email = req.params.email;
  var password = req.params.password;
  console.log(email);
  let x = User.getUsersLogin({email:email,password:password},function(err,shops){
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

// add work
app.post('/api/fixit/work',function(req,res){
  console.log("dd");
  var work = req.body;
  Work.addWork(work,function(err,work){
    if(err){
      throw err;
    }
    res.json(work);
  });
});

//get works by empID
app.get('/api/fixit/work/empid/:empid',function(req,res){

  var empid = req.params.empid;
  let x = Work.getWorkByEmp({empID:empid},function(err,work){
    if(err){
      throw err;
    }
    res.json(work);
  });
});

//get works by userID
app.get('/api/fixit/work/userid/:userid',function(req,res){
  var userid = req.params.userid;
 console.log("getting Works By user ID ", userid );  
  let x = Work.getWorkByUser({userID:userid},function(err,work){
    if(err){
      throw err;
    }
    res.json(work);
  });
});


//getwork by _id
app.get('/api/fixit/work/:id',function(req,res){
  console.log("getting Work by id");
  var id = req.params.id;
  console.log("Getting Work By ID ",id);
  let x = Work.getWorkById({_id:id},function(err,work){
    if(err){
      throw err;
    }
    res.json(work);
  });
});


//updatWorkState
app.put('/api/fixit/work/:id',function(req,res){
 
  var id=req.params.id;
  var work=req.body;
  console.log("Updting state",id,"  " ,req.body.state);

  Work.updateState(id,work,function(err,work){
      if(err){
          throw err;
      }
      res.json(work);
  })
});

// add jobs
app.post('/api/fixit/jobs',function(req,res){
  console.log("addingJob");
  var job = req.body;
  Job.addJob(job,function(err,job){
    if(err){
      throw err;
    }
    res.json(job);
  });
});

//getJobs
app.get('/api/fixit/jobs',function(req,res){
 
  Job.getJobs(function(err,jobs){
    if(err){
      throw err;
    }
    res.json(jobs);
  });
});

//getJobs by _id
app.get('/api/fixit/jobs/:id',function(req,res){
  var id = req.params.id;
  console.log("Getting job By ID ",id);
  let x = Job.getJobById({_id:id},function(err,job){
    if(err){
      throw err;
    }
    res.json(job);
  });
});

//getJobs by _id
app.get('/api/fixit/jobs/empid/:id',function(req,res){
  var id = req.params.id;
  console.log("Getting job By empID ",id);
  let x = Job.getJobByEmpId({userID:id},function(err,job){
    if(err){
      throw err;
    }
    res.json(job);
  });
});

// removeJobs
app.delete('/api/fixit/jobs/:id',function(req,res){
  var id=req.params.id;
  console.log("Removing Job " ,id);
  
  Job.removeJob(id,function(err,job){
      if(err){
          throw err;
      }
      res.json(job);
  })
});



//addworkFeddback
app.post('/api/fixit/feedback/wfeedback',function(req,res){
  console.log("adding work Feedback");
  var wfeedback = req.body;
  wFeedback.addwFeedBack(wfeedback,function(err,job){
    if(err){
      throw err;
    }
    res.json(wfeedback);
  });
});

//getworkFeedback by _id
app.get('/api/fixit/feedback/wfeedback/:id',function(req,res){
  var id = req.params.id;
  console.log("getting Feedback by _id ",id);
  let x = wFeedback.getwFeedBack({workId:id},function(err,wfeedback){
    if(err){
      throw err;
    }
    res.json(wfeedback);
  });
});


//addUsers
app.post('/api/fixit/jobreq/',function(req,res){
  console.log("Adding JobReq");
  var jobreq = req.body;
  JobReq.addReq(jobreq,function(err,user){
    if(err){
      throw err;
    }
    res.json(jobreq);
  });
});


//getReq by _id
app.get('/api/fixit/jobreq/:id',function(req,res){
  var id = req.params.id;
  console.log("getting req by _id ",id);
   JobReq.getReq({_id:id},function(err,jobreq){
    if(err){
      throw err;
    }
    res.json(jobreq);
  });
});

//getReq by Jobid
app.get('/api/fixit/jobreq/jobid/:id',function(req,res){
  var id = req.params.id;
  console.log("Getting job By empID ",id);
  let x = JobReq.getReqByJobId({jobid:id},function(err,jobreq){
    if(err){
      throw err;
    }
    res.json(jobreq);
  });
});



///////////////////////////////////////
// add Order
app.post('/api/fixit/order',function(req,res){
  console.log("Ordeing");
  var order = req.body;
  Order.addOrder(order,function(err,order){
    if(err){
      throw err;
    }
    res.json(order);
  });
});

//get works by empID
app.get('/api/fixit/order/empid/:empid',function(req,res){

  var empid = req.params.empid;
  let x = Order.getOrderByEmp({empID:empid},function(err,order){
    if(err){
      throw err;
    }
    res.json(order);
  });
});

//get works by userID
app.get('/api/fixit/order/userid/:userid',function(req,res){
  var userid = req.params.userid;
 console.log("getting order By user ID ", userid );  
  let x = Order.getOrderByUser({userID:userid},function(err,order){
    if(err){
      throw err;
    }
    res.json(order);
  });
});


//getwork by _id
app.get('/api/fixit/order/:id',function(req,res){
  console.log("getting Order by id");
  var id = req.params.id;
  console.log("Getting Order By ID ",id);
  let x = Order.getOrderById({_id:id},function(err,order){
    if(err){
      throw err;
    }
    res.json(order);
  });
});


//updatWorkState
app.put('/api/fixit/order/:id',function(req,res){
 
  var id=req.params.id;
  var order=req.body;
  console.log("Updting state",id,"  " ,req.body.state);

  Order.updateState(id,order,function(err,work){
      if(err){
          throw err;
      }
      res.json(order);
  })
});



app.listen(3000);
console.log("running on port 3000");
