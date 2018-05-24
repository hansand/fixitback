var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    empID:{
        type:String,
        require:true
    },
    userID:{
        type:String,
        require:true
    },
    orderTitle:{
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

var Order = module.exports = mongoose.model('Order' ,orderSchema  );

//add Work
module.exports.addOrder = function(order,callback ){
    Order.create(order,callback);
  }

// get Work  by empID
module.exports.getOrderByEmp = function(query,callback){
    Order.find(query,callback);
   }

// get Work  by ID
module.exports.getOrderById = function(query,callback){
    Order.find(query,callback);
   }

    //updatestateWork
module.exports.updateState = function(id,order,options,callback){
    var query = {_id:id};
    var update = {
      state:order.state
    }
  
    Order.findOneAndUpdate(query,update,options,callback);
  }

// get Work  by userID
module.exports.getOrderByUser = function(query,callback){
    Order.find(query,callback);
   }