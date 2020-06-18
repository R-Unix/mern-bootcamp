User =require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) =>{
        if(err){
            return res.status(400).json({
                err: "Not able to save user in Databse"
            })
        }
        res.json(user);
    });
};

exports.signout = (req, res) => {
    //res.send("user signout success"),
    res.json({
        message: "This is json response",
    });
};


