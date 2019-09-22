const express = require('express');
const notifications = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const Complain = require("../models/Complain");
notifications.use(cors());
const Sequelize = require('sequelize');


//USER_NOTIFICATION_COUNT_FOR_POSTS
notifications.post('/getPostCount', (req, res) => {
    Post.count({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isViwed: false }
            ]
        }
    }).then((result) => {
        console.log(result);
        res.json(result);
    })
})


//USER_NOTIFICATION_COUNT_FOR_COMPLAIN
notifications.post('/getCompCount', (req, res) => { //mekata twa work 'done' krpu notification ennt oni
    Complain.count({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isViwed: false }
            ]
        }
    }).then((respond) => {
        console.log(respond);
        res.json(respond);
    })
})


//VIEW_ACCEPTED_POST_OF_USER
notifications.post('/viewPostNotifications', (req, res) => {
    const id = req.body.id;//ID_OF_THE_POST
    Post.findAll({
        where: {
            id: id
        }
    })
        .then((respond) => {
            Post.update({         //AFTER_VIEW_SET_ISVIEWD_TRUE
                isViwed: true
            }, {
                where: {
                    id: id
                }
            });
            res.json(respond);
        });
});



//VIEW_ACCEPTED_COMPLAIN_OF_USER
notifications.post('/viewCompNotifications', (req, res) => {
    const id = req.body.id; //ID_OF_THE_COMPLAIN
    Complain.findAll({
        where: {
            id: id
        }
    })
        .then((respond) => {
            Complain.update({
                isViwed: true    //AFTER_VIEW_SET_ISVIEWD_TRUE
            }, {
                where: {
                    id: id
                }
            });
            res.json(respond);
        });
});



//GET_COMPLAINS_OF_OTHER_USERS_AS_DESC_ORDER
// notifications.post('/viewCompNotifications',(req,res)=>{
//     Complain.findAll({
//         where:{
//             user_id:{
//                 [Sequelize.Op.ne]:[req.body.user_id] NOT_QUERY Op=OPTION ne=NOT
//             },
//             isViwed:false,
//         },
//         order:[
//             ['id','DESC']
//         ]
//     }).then((respond)=>{
//         res.json(respond);
//     })
// })



module.exports = notifications