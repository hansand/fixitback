var mongoose = require('mongoose');

var shopSchema =mongoose.Schema({
  
    shopName:{
    type:String,
    required:true
  },
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:Number,
        maxlength: 10,
        required:true
    },
    shopCatogory:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
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

var Shop = module.exports = mongoose.model('Shop' ,shopSchema  );

//addShop
module.exports.addShop = function(shop,callback ){
  Shop.create(shop,callback);
}

//getShops
module.exports.getShops = function(callback ){
  Shop.find(callback);
}

// get Shops by Catogory
module.exports.getShopsByCatogory = function(query,callback){
    Shop.find(query,callback);
   }

   // getShopbyID
module.exports.getShopById = function(query,callback){
    Shop.find(query,callback);
   }
  
