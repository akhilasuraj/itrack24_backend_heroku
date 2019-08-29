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
    PostImg:'',
    PostDate: '',
    PostTime: ''
    
}

//GET_POSTS
getposts.get('/viewposts',(req,res,err)=>{
    Post.findAll()                       //.findAll returns all the rows in table//
    .then(result=>{
        console.log('HERE ALL THE POSTS...');
        res.json(result);
    });
});

//GET_MY_POSTS
getposts.post('/viewmyposts', (req,res)=>{
    Post.findAll({
        where:{
          UserID:req.body.id
        }
    })
    .then((result)=>{
        res.json(result);
        console.log(result);
    })
})

//DELETE_POST
getposts.delete("/deletepost",(req,res)=>{
    Post.destroy({
        where:{
          id:req.body.id
        }
    })
    .then((result)=>{
        console.log("POST_DELETED");
    })
})



module.exports=getposts