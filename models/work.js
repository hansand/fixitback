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
    workTitle:{
        type:String,
        required:true
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

//add Work
module.exports.addWork = function(work,callback ){
    Work.create(work,callback);
  }

// get Work  by empID
module.exports.getWorkByEmp = function(query,callback){
    Work.find(query,callback);
   }

// get Work  by ID
module.exports.getWorkById = function(query,callback){
    Work.find(query,callback);
   }

    //updatestateWork
module.exports.updateState = function(id,work,options,callback){
    var query = {_id:id};
    var update = {
      state:work.state
    }
  
    Work.findOneAndUpdate(query,update,options,callback);
  }

// get Work  by userID
module.exports.getWorkByUser = function(query,callback){
    Work.find(query,callback);
   }