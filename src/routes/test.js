'use strict';
// /test/process
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

module.exports = () => {
    // 1. test 결과 return
    // - test결과를 console.log에 출력!
    // - userName이라는 외래키를 불러와서 유져를 찾고.
    // - test결과를 userLike속성에 push시켜준다! 
    router.post('/process', async(req,res) => {
        // 
        const { answer } = req.body;
        console.log(answer);

        let findUser = await User.findOne({ userName : '김지성'});
        // 김지성...!!
        // console.log(findUser);
        findUser.response.push(...answer);
        // 값을 넣어준다!!!
        console.log(findUser);
    })

    return router;
}