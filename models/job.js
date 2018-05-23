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
        require:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        defult:Date.now
    }
});

var Job = module.exports = mongoose.model('Job' ,jobSchema  );

//add JOb
module.exports.addJob = function(job,callback ){
    Job.create(job,callback);
  }

  //getJob by Id
  module.exports.getJobById = function(job,callback ){
    Job.find(job,callback);
  }

//getAllJobs
module.exports.getJobs = function(callback ){
    Job.find(callback);
  }

  //removeJob
module.exports.removeJob = function(id,callback){
    var query = {_id:id};
    Job.remove(query,callback);
}


  //getJob by empId
  module.exports.getJobByEmpId = function(job,callback ){
    Job.find(job,callback);
  }