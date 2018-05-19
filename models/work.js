var mongoose = require('mongoose');

var workSchema = mongoose.Schema({
    empID:{
        type:String,
        require:true
    },
    userID:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    state:{
        type:String,
        defult:"Pending",
    },
    create_date:{
        type:Date,
        defult:Date.now
    }
});

var Work = module.exports = mongoose.model('Work' ,workSchema  );

//add feedBack
module.exports.addWork = function(work,callback ){
    Work.create(work,callback);
  }

// get Work  by empID feedBack
module.exports.getWorkByEmp = function(query,callback){
    Work.find(query,callback);
   }