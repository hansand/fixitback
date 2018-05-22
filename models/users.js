var mongoose = require('mongoose');

//schema

var userSchema = mongoose.Schema({

  name:{
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
    required:true,
    maxlength: 10
  },
  role:{
    type:String,
    required:true
  },
  nearTown:{
    type:String,
    required:true
  },
  ratings:{
    type:Number,
    default:0
  },
  shopType:{
    type:String
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
  var mysort={ratings:-1}
 Users.find(query,callback).sort(mysort);
}

// getUserbyID
module.exports.getUsersById = function(query,callback){
  Users.find(query,callback);
 }

 // getUserbyLogin
module.exports.getUsersLogin = function(query,callback){
  Users.find(query,callback);
 }

 //updateUser
module.exports.updateUser = function(id,user,options,callback){
  var query = {_id:id};
  var update = {
    ratings:user.ratings
  }

  User.findOneAndUpdate(query,update,options,callback);
}
