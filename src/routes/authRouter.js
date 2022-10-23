'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
// /api/auth 

module.exports = () => {
    router.post('/register-process', async(req,res) => {
        const { email, password, userName } = req.body; // email password;
        
        let newUser = new User(
            {
                email : email,
                password : password,
                userName : userName,
            }
        )
        let saveUser = await newUser.save();
        console.log(saveUser);
    })


    router.post('/login-process', async(req,res) => {
        const { email, password } = req.body;

        let findUser = await User.findOne({ email : email});
        console.log(findUser);

        return res.redirect('/index');
    })
    return router;
}