const express = require("express");
const getposts = express.Router();
const cors = require("cors");
var async = require("async");
const Post = require("../models/Post");
getposts.use(cors());

PostDetails = {
    UserID: 0,
    FirstName: '',
    PostText: '',
    PostTitle:'',
    PostImg:'',
    PostDate: '',
    PostTime: '',
    isViwed:'',
    isAccepted:'',
    isRejected:''
    
}

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
        console.log("HERE_EDITABLE_COMPLAINS");
     })
});

//DELETE_WHATEVER_POSTS(ACCEPTED/ NOT_ACCEPTED)
getposts.post('/deletepost',(req,res)=>{
    console.log(req.body.postid);
    Post.destroy({
        where:{
          id:req.body.postid
        }
    })
    .then((result)=>{
       res.send({
           message: "Post has been deleted"
       })
        console.log("POST_DELETED");
    });
});


//-------------itrack24 MobileClient----------------------//

//GET_ALL_POSTS_OF_EVERYONE
getposts.post("/getallposts",(req,res)=>{
    Post.findAll()
    .then(respond=>{
        res.json(respond);
        console.log("HERE_EVERYONE'S_POSTS");
    })
});





module.exports=getposts