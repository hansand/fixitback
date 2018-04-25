var mongoose = require('mongoose');

//schema

var userSchema = mongoose.Schema({

  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  telephone:{
    type:Number,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  },
  lat:{
    type:Number,
    required:true
  },
  lang:{
    type:Number,
    required:true
  }
});

var Users = module.exports = mongoose.model('Users' ,userSchema  );

//get users
module.exports.getUsers = function(callback){
  Users.find(callback);
}

//add users
module.exports.addUsers = function(user,callback ){
  Users.create(user,callback);
}

//get user by role
module.exports.getUsersByRole = function(query,callback){
 Users.find(query,callback).limit(100);
}
