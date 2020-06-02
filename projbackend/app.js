require('dotenv').config();

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// DB connections
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() =>{
    console.log("Database is connected successfully !");
});

// Middelwares 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/")


// PORT INFO
const port = process.env.PORT || 8000;

// Starting a Server
app.listen(port, () => {
    console.log(`app is running at port number ${port} ...`);
})