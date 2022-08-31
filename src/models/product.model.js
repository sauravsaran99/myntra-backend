const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id :{type:Number},
    rating:{type:Number},
    ratingsCount:{type:Number},
    imgsrc:{type:String},
    brand:{type:String},
    productdec:{type:String},
    productsize:{type:String},
    productsize2:{type:String},
    productsize3:{type:String},
    productsize4:{type:String},
    productsize5:{type:String},
    productsize6:{type:String},
    dprice:{type:Number},
    strike:{type:Number},
    dper:{type:Number},
    category:{type:String},
    
})  

module.exports = mongoose.model("Product",productSchema)