require('dotenv').config();

const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() =>{
    console.log("Database is connected successfully");
});

const port = 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})