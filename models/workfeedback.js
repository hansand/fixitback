var mongoose = require('mongoose');

var wfeedbackSchema =mongoose.Schema({
    workId:{
        type:String,
        required:true
      },
  feedback:{
    type:String,
    required:false
  }
});

var wFeedback = module.exports = mongoose.model('wfeedback' ,wfeedbackSchema  );

//addworkfeedback
module.exports.addwFeedBack = function(wfeedback,callback ){
  wFeedback.create(wfeedback,callback);
}

//getWFeedbackbyid
module.exports.getwFeedBack = function(query,callback ){
  wFeedback.find(query,callback);
}
