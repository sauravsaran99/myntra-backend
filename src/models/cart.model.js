const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    id :{type:Number},
    userid: {type:String},
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
    quantity:{type:Number},
    dper:{type:Number},
    category:{type:String},
    size:{type:String},
    selectSize:{type:String},
},
{timestamps:true}
)  


module.exports = mongoose.model("Cart",cartSchema)