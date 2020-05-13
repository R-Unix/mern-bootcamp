const express = require('express');

const app = express();

const port = 8000; 

app.get("/login", (req, res) =>{
    return res.send("You are in the login route");
});

app.get("/signup", (req, res) =>{
    return res.send("You are on the Sign Up page");
});

app.get("/", (req, res) =>{
    return res.send("You are on the Home Page");
});

app.listen(port, () => {
    console.log(`Server is up and running at port number ${port} ...\nlocalhost:8000`);
});