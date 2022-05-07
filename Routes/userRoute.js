// const router = require('express').Router();
const express = require('express');
const app = express();
const userModel = require('../Models/user')
const bookModel = require('../Models/book');
const commentModel = require('../Models/comment');

app.use(express.json());

app.post('/registeration', async(req, res, next) => {

    try {
    
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }

});

app.post('/loginuser', async(req, res, next) => {
    // res.send("User login route.")
    try {
    
        // let email = req.body;
        let response = await userModel.find({email: req.body});
        console.log(response);
        res.json(response);

    } catch (error) {
        res.json(error);
    }

});

app.post('/bookmake', async(req, res, next) => {
    // res.send("CreateBook route.")
    try {
    
        let bookDetail = req.body;
        let response = await bookModel.insertMany([bookDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }
});

app.post('/CommentCreated', async(req, res, next) => {
    // res.send("Create comment route.")
    try {
    
        let commentDetail = req.body;
        let response = await commentModel.insertMany([commentDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }
});

app.get('/Postviews', async(req, res, next) => {
    // res.send("View posts route.");
    try {
    
        let response = await userModel.find({});
        res.json(response);

    } catch (error) {
        res.json(error);
    }

});




module.exports = app;