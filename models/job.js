var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({

    userID:{
        type:String,
        require:true
    },
    jobTitle:{
        type:String,
        require:true
    },
    
    jobOrg:{
        type:String,
        require:true
    },
    email:{
        type:String,
        defult:"Pending",
    },
    contact:{
        type:String,
        defult:"Pending",
    },
    description:{
        type:String,
        defult:"Pending",
    },
    create_date:{
        type:Date,
        defult:Date.now
    }
});

var Job = module.exports = mongoose.model('Job' ,jobSchema  );

//add feedBack
module.exports.addJob = function(job,callback ){
    Job.create(job,callback);
  }

// get Work  by empID feedBack
module.exports.getJobByEmp = function(query,callback){
    Job.find(query,callback);
   }