const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json({limit: '200mb', extended: true}))
const _Port = "3001"



//CONNECT TO MY DB
const username = "alexdbreact",
      database = "Alexandria";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:orsod@cluster0.oiijcet.mongodb.net/${database}?retryWrites=true&w=majority`); 


// IMPORT USER MODEL

const UserModel = require("./models/Users")

app.get("/users",async (req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})

//create user

app.get("/",(req, res)=>{
    res.send("<h1>kkjll<h1>")
})
 // start server on port

app.listen( _Port , ()=>{
    console.log("server work")
})