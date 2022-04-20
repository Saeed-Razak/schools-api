const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const userRoutes =require("./routes/userRoutes")

connectDB() 
const app = express();


//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users",userRoutes)

//home route

app.get("/",(req, res)=>{
    res.json("<h1>WELCOME TO OUR SCHOOL API</h1>")
})

const PORT = process.env.PORT||9000

app.listen( PORT, ()=>{
    console.log("I'M ON BOARD")
})