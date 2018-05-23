var mongoose = require('mongoose');

var jobReqSchema = mongoose.Schema({

    jobid:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        defult:Date.now
    }
});

var JobReq = module.exports = mongoose.model('jobreq' ,jobReqSchema  );

//add feedBack
module.exports.addReq = function(jobreq,callback ){
    JobReq.create(jobreq,callback);
  }

//get req by JobID
module.exports.getReqByJobId = function(query,callback){
    JobReq.find(query,callback);
   }


