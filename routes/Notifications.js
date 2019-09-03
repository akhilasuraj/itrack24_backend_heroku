const express = require('express');
const notifications = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const Complain = require("../models/Complain");
notifications.use(cors());
const Sequelize = require('sequelize');


//NOTIFICATION_FOR_POSTS
notifications.get('/getPostCount',(req,res)=>{
  console.log(req.body.id)
    Post.findAll({
        where:{
        UserID:{
            [Sequelize.Op.ne]:[req.body.id]
        },
    }
    }).then((result)=>{
        res.json(result);
    })
})

notifications.get('/getmyCompCount',(req,res)=>{
    console.log(req.body.uid);
    Complain.findAll({
        where:{
            user_ID:{
                [Sequelize.Op.ne]:[req.body.uid]
            },
        }
    }).then((respond)=>{
        res.json(respond);
    })
})

 module.exports=notifications