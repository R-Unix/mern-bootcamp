const User = require("../models/user");
const { check, validationResult } = require('express-validator');
const user = require("../models/user");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signup = (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    const user = new User(req.body);
    user.save((err, user) =>{
        if(err){
            return res.status(400).json({
                err: "Not able to save user in Databse"
            });
        }
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
          });
    });
};

exports.signin = (req, res) => {
    const {email, password} = req.body;  //this will extract email and password from request body
    
    if(!errors.isEmpty()){                  // Validation part Error responce
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    User.findOne({email}, (err, user)=> {                //find one is function of mongo db
        if (err) {
            res.status(400).json({
                error: "User email does not exists in records",
            })
        }
        if (!user.autheticate(password)) {
            return res.status(401).json({
                error: "Email and password do not match",
            })
        }


        //create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, {expire: new Date() + 9999});

        // send res to front end
        const {_id, name, email, role} = user; // deconstruction of user
        return res.json({token, user: {_id, name, email, role}});
    });
};

exports.signout = (req, res) => {
    res.json({
        message: "User signout",
    });
};
