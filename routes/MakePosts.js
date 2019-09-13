const path = require('path');
const express = require('express');
const multer = require('multer');
const posts = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const bodyParser = require('body-parser');
posts.use(cors());

//ADDING POST IMAGE DATA
const Img_Data = {
    postID: 0,
    userID: 0,
    post_img: ''
}

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

//ADD_IMAGE_TO_POST
posts.post('/addimage', upload.single('postImg'), async function (req, res, files) {
    if (!req.file) {
        console.log('FILE_NOT_RECEIVED');
    }
    else {
        Img_Data.post_img = req.file.filename;
        res.json(Img_Data.post_img);
        console.log(Img_Data.post_img);
    }
});

//ADDING POST DATA
PostDetails = {
    UserID: 0,
    FirstName: '',
    PostText: '',
    PostTitle:'',
    PostImg:'',
    PostLike:0,
    PostDisLike:0,
    PostDate: '',
    PostTime: '',
    isViwed:false

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
posts.post('/addpost', (req, res, err) => {
    const PostDetails = {
        UserID: req.body.UserID,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PostText: req.body.PostText,
        PostTitle: req.body.PostTitle,
        PostImg:Img_Data.post_img,
        PostDate: getDate(),            
        PostTime: getTime(),
        isViwed:false
    }
    if (PostDetails) {
        console.log(PostDetails);
        Post.create(PostDetails)
            .then((post) => {
                res.send(post);
                console.log('POST_CRETED_SUCCESFULLY');

            }).catch((err) => {
                res.json(err);

            });
    }
    else {
        console.log('POST_NOT_RECEIVED');
    }
})

//GET_POST_LIKE_COUNT
posts.post('/likecount',(req,res)=>{
   Post.update({
       PostLike:req.body.PostLike
   },{
       where:{
           id:req.body.id
       }
   }).then((likes)=>{
       res.json(likes);
   })

});

//GET_DISLIKE_COUNT
posts.post('/dislikecount',(req,res)=>{
    Post.update({
        PostLike:req.body.PostLike
    },{
        where:{
            id:req.body.id
        }
    }).then((dislikes)=>{
        res.json(dislikes);
    })
 
 });



module.exports = posts