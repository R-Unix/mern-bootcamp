var express = require("express");
var router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');


router.post("/signup",[
    check("name").isLength({ min: 5 }).withMessage('name should be at least 3 characters'),
    check("email").isEmail().withMessage('email is required'),
    check("password").isLength({ min:3 }).withMessage('password should be 8 characters long'),
], signup);

router.get("/signout", signout);

module.exports = router;