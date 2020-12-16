const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//initializing express app
const app = express();
app.use(cors());
app.use(express.json());


//for env file
require('dotenv').config();
const port = process.env.PORT || 5000;

//connecting to db
const uri = process.env.Mongo_Uri;
console.log(uri);

mongoose.connect(uri, {useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true}, (error)=>{
    if(error){
        console.log(`connection unsuccesful error: ${error}`)
    }else{
        console.log(`connection established successfully ${mongoose.connection.host}`);
    };
});

//router
const userRouter = require("./router/user");
const exerciseRouter = require("./router/exercise");

app.use("/users", userRouter);
app.use("/exercises", exerciseRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})