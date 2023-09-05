const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const registerController = require("./src/controllers/register.controller");
const loginController = require("./src/controllers/login.controller");
const productController = require("./src/controllers/product.controller");
const cartController = require("./src/controllers/cart.controller");
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
require("dotenv").config();

app.get('/',(req,res) => {
    return res.send('Welcome to backend server of myntraClone');
  })
app.use("/register",registerController);
app.use("/login",loginController);
app.use("/products",productController);
app.use("/cart",cartController);
const connect = async() => {
    try{
        mongoose.connect("mongodb+srv://myntra2:myntra2@cluster0.u1a0ee5.mongodb.net/?retryWrites=true&w=majority")
    }
    catch(err){
        console.log(err.message)
    }
}
                                                      

app.listen(process.env.PORT||8080,async() => {
    try{
        await connect();
        console.log("Listening on port 8080")
    }
    catch(err){
        console.log(err.message)
    }
});