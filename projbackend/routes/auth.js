var express = require("express");
var router = express.Router();
const { signout, signup, signin } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');


router.post("/signup",
[                                     //post= "Get info from user"
    check("name").isLength({ min: 5 }).withMessage('name should be at least 3 characters'),
    check("email").isEmail().withMessage('email is required'),
    check("password").isLength({ min:3 }).withMessage('password should be 8 characters long'),
], signup);

router.get("/signout", signout);                            //get= "give it to the user"

router.post("/signin",
[                                     //post= "Get info from user"
    check("email").isEmail().withMessage('email is required'),
    check("password").isLength({ min:3 }).withMessage('password field is required'),
], signin);


module.exports = router;