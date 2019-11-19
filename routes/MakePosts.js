const path = require('path');
const express = require('express');
const multer = require('multer');
const posts = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const bodyParser = require('body-parser');
posts.use(cors());

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './postImages');
    },

    filename: (req, file, cb) => {
        var filetype = '';
        if (file.mimetype === 'image/jpg') {
            filetype = 'jpg';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }

        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpeg';
        }

        cb(null, file.originalname + '-' + Date.now() + '.' + filetype);
    }
});


var upload = multer({
    storage: storage,
    limits: { fileSize: '50M' }
});


//ADDING POST DATA
PostDetails = {
    UserID: 0,
    FirstName: '',
    LastName:'',
    PostContent: '',
    PostTitle:'',
    PostImg:'',
    PostLike:0,
    PostDisLike:0,
    PostDate: '',
    PostTime: '',
    isViwedByUser:false,
    isViwedByAdmin:false,
    isAccepted:false,
    isRejected:false

}
//ADD_CURRENT_DATE
function getDate() {
    return new Date(Date.now()).toLocaleString();
}


//ADD_CURRENT_TIME
function getTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + ":" + min + ":" + sec;

}
//ADD_POST
posts.post('/addpost',upload.single('postImg'), (req, res, err) => {
    const PostDetails = {
        UserID: req.body.UserID,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PostContent: req.body.PostContent,
        PostTitle: req.body.PostTitle,
        PostImg:req.file.filename,
        PostLike:0,
        PostDisLike:0,
        PostDate: getDate(),            
        PostTime: getTime(),
        isViwedByUser:false,
        isViwedByAdmin:false,
        isAccepted:false,
        isRejected:false,
    }
    if (PostDetails) {
        console.log(PostDetails);
        Post.create(PostDetails)
            .then((post) => {
                res.send({
                    message: "Your Post submitted succesfully. We will notify you when admin responded within it."
                });
                console.log('POST_CRETED_SUCCESFULLY');

            }).catch((err) => {
                res.json(err);

            });
    }
    else {
        console.log('POST_NOT_RECEIVED');
    }
});





module.exports = posts