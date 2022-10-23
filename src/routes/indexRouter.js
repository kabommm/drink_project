'use strict';
const express = require('express');
const router = express.Router(); // app.get vs router.get 
// router 모듈화가 가능하게 해줌.. app.method => 모듈화가 불가능...!!
const Question = require('../models/Question.js');

module.exports = () => {
    //1. index GET : /index
    router.get('/index', async(req,res) => {
        try{
            let indexPage = await res.status(202).render('index.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 전통주 취향 test GET /drink-test/index
    router.get('/drink-test/index', async(req,res) => {
        // db안에 있는 질문들을 전부 불러와서 여기다가 띄울거야!! 

        try{
            let questions = await Question.find();
            // [ {}, {}, {}, ... ]
            console.log(questions);
            let drinkTestPage = await res.status(202)
            .render('drinkTest.ejs', {
                questions : questions,
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 3. 전통주 주점 GET /drink-shop/index
    router.get('/drink-shop/index', async(req,res) => {
        try{
            let drinkShopPage = await res.status(202).render('drinkShop.ejs');
        }catch(err){
            return console.log(err);
        }
    })
    
    // 4. 회원가입 페이지 GET /register/index
    router.get('/register/index', async(req,res)=> {
        res.render('register.ejs');
    })

    // 5. 로그인 페이지 GET /login/index
    router.get('/login/index', async(req,res) => {
        res.render('login.ejs');
    })
    return router;
}