const express = require('express');
const notifications = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const Complain = require("../models/Complain");
notifications.use(cors());
const Sequelize = require('sequelize');


//NOTIFICATION_FOR_POSTS
notifications.post('/getPostCount',(req,res)=>{
  console.log(req.body.uid)
    Post.count({
        where:{
        UserID:{
            [Sequelize.Op.ne]:[req.body.uid]
        },
    }
    }).then((result)=>{
        res.json(result);
    })
})

notifications.post('/getCompCount',(req,res)=>{
    console.log(req.body.uid);
    Complain.count({
        where:{
            user_ID:{
                [Sequelize.Op.ne]:[req.body.uid] //NOT_QUERY Op=OPTION ne=NOT
            },
        }
    }).then((respond)=>{
        res.json(respond);
    })
})

notifications.get('/viewPostNotifications',(req,res)=>{
    Post.findAll({
        where:{
            UserID:{
                [Sequelize.Op.ne]:[req.body.uid] //NOT_QUERY Op=OPTION ne=NOT
            },
            isViwed:false
        }
    })
    .then((respond)=>{  
        res.json(respond);
    })
})

 module.exports=notifications