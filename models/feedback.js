var mongoose = require('mongoose');

var feedBackSchema = mongoose.Schema({
    empID:{
        type:String,
        require:true
    },
    feedback:{
        type:String,
        require:true
    },
    ratePoint:{
        type:Number,
        required:true
    },
    create_date:{
        type:Date,
        defult:Date.now
    }
});

var FeedBack = module.exports = mongoose.model('FeedBack' ,feedBackSchema  );

//add feedBack
module.exports.addFeedBack = function(feedBack,callback ){
    FeedBack.create(feedBack,callback);
  }

//get Feed back by empID feedBack
module.exports.getFeedBackByEmp = function(query,callback){
    FeedBack.find(query,callback);
   }