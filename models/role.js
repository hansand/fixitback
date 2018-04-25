var mongoose = require('mongoose');

var roleSchema =mongoose.Schema({
  roleName:{
    type:String,
    required:true
  }
});

var Role = module.exports = mongoose.model('Role' ,roleSchema  );

//addRole
module.exports.addRole = function(role,callback ){
  Role.create(role,callback);
}

//getRoles
module.exports.getRoles = function(callback ){
  Role.find(callback);
}
