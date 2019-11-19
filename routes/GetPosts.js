const express = require("express");
const getposts = express.Router();
const cors = require("cors");
const multer = require('multer');
var async = require("async");
const Post = require("../models/Post");
const Like = require("../models/PostLikes");
getposts.use(cors());



LikeDetails = {
    UserID: 0,
    PostID: 0,
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
    isViwed:'',
    isAccepted:'',
    isRejected:''
    
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

};

//ADD_CURRENT_DATE
function getDate() {
    return new Date(Date.now()).toLocaleString();
};

//GOTO_NEWSFEED
getposts.get('/viewposts',(req,res,err)=>{
    Post.findAll({
        where:{
            isAccepted:true
        },
        order: [
            ['id','DESC'],
        ],
    })                       //.findAll returns all the rows in table//
    .then(result=>{
        console.log('HERE ALL THE POSTS...');
        res.json(result);
    });
});

//--------------------------GET_MY_POSTS----------------------

//ACCEPTED_POSTS
getposts.post('/acceptedposts', (req,res)=>{
    console.log(req.body.UserID);
    Post.findAll({
        where:{
          UserID:req.body.UserID,
          isAccepted: true
        },
        order: [
            ['id','DESC'],
        ]
    })
    .then((result)=>{
        res.json(result);
        console.log(result);
        console.log("HERE ACCEPTED POSTS");
    });
});

//EDITABLE_POSTS
getposts.post('/editableposts',(req,res)=>{
    const UserID = req.body.UserID;
    Post.findAll({
        where: {
           UserID: UserID,
           isAccepted: false,
           isRejected: false
        }, order: [
           ['id', 'DESC'], //GET_AS_DESCENDING_ORDER
        ]
     }).then(result => {
        res.json(result);
        console.log(result);
        console.log("HERE_EDITABLE_COMPLAINS");
     })
});

//DELETE_WHATEVER_POSTS(ACCEPTED/ NOT_ACCEPTED)
getposts.post('/deletepost',(req,res)=>{
    console.log(req.body.id);
    const id = req.body.id;
    Post.destroy({
        where:{
          id:id
        }
    })
    .then((result)=>{
       res.send({
           message: "Post has been deleted"
       })
        console.log("POST_DELETED");
    });
});

//EDIT_POST
getposts.post("/editpost",(req,res)=>{
    const id = req.body.id;
    Post.findOne({
        where :{
            id:id
        }
    }).then(result=>{
        res.json(result);
        console.log("THIS IS POST DETAILS");
    });
 });
 
//UPDATE_POST
getposts.post("/updatepost", upload.single('postImg'), (req,res)=>{
    const id = req.body.id;
     console.log(id);
    console.log(req.file.filename);
    Post.update({
    PostContent: req.body.PostContent,
    PostTitle: req.body.PostTitle,
    PostImg:req.file.filename,
    PostDate: getDate(),
    PostTime: getTime()
    },{
        where:{
            id:id
        }
    }).then(result=>{
        console.log(result);
        res.json({
            message : "Your post has been succesfully updated"
        });
    });
});



//ADD_LIKE_TO_POST
getposts.post('/addlike', (req, res) => {
    console.log(req.body);
    const LikeDetails = {
        UserID: req.body.userID,
        PostID: req.body.postID,
    }
    if (LikeDetails) {
        Like.create(LikeDetails)
            .then((result) => {
                res.send({
                    message: "You liked to this post"
                })
                console.log("Like added to post");
            });
    }
});

//REMOVE_LIKE
getposts.post('/removelike', (req, res) => {
    console.log(req.body.postid);
    Like.destroy({
        where: {
            UserID: req.body.userID,
            PostID: req.body.postID,        
        }
    })
        .then((result) => {
            res.send({
                message: "Your like has been removed"
            })
            console.log("LIKE DELETED");
        });
});

//GET_LIKED_POSTS
getposts.post('/getlikes', (req, res) => {
    console.log(req.body.userID);
    Like.findAll({
        where: {
            UserID: req.body.userID
        },
        order: [
            ['id', 'DESC'],
        ]
    })
        .then((result) => {
            res.json(result);
            console.log(result);
        })
})



//-------------itrack24 MobileClient----------------------//

//GET_ALL_POSTS_OF_EVERYONE
getposts.post("/getallposts",(req,res)=>{
    Post.findAll()
    .then(respond=>{
        res.json(respond);
        console.log("HERE_EVERYONE'S_POSTS");
    })
});





module.exports = getposts