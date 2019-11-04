const express = require('express');
const notifications = express.Router();
const cors = require("cors");
const Post = require("../models/Post");
const Complain = require("../models/Complain");
const Job = require("../models/job");
notifications.use(cors());
const Sequelize = require('sequelize');



//ADMIN_REJECTED_||_ACCEPTED_POST_COUNT
notifications.post('/getPostCount', (req, res) => {
    const UserID = req.body.UserID;
    Post.count({
        where: {
            UserID: UserID,
            isViwedByUser: false
        }
    }).then((result) => {
        console.log(result);
        res.json(result);
    })
});


//ADMIN_REJECTED_||_ACCEPTED_COMPLAIN_COUNT
notifications.post('/getCompCount', (req, res) => { //mekata twa work 'done' krpu notification ennt oni
    const user_id = req.body.user_id;
    Complain.count({
        where: {
            user_id: user_id,
            isViwedByUser: false
        }
    }).then((respond) => {
        console.log(respond);
        res.json(respond);
    })
});

// //COMPLETED_COMPLAINS_NOTIFICATIONS *************
// notifications.post('/getcompletedcomplains',(req,res)=>{
//      Job.count({
//         where: {
//             [Sequelize.Op.or]: [
//                 { isAccepted: true },
//                 { isViwedByUser: false }
//             ]
//         }
//      })
// });


//VIEW_POST_NOTIFICATIONS_FOR_USER
notifications.post('/viewPostNotifications', (req, res) => {
    const UserID = req.body.UserID;
    Post.findAll({
        where: {
            UserID: UserID,
            isViwedByUser: false
        }, order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});



//VIEW_COMPLAIN_NOTIFICATIONS_FOR_USER
notifications.post('/viewCompNotifications', (req, res) => {
    const user_id = req.body.user_id;
    Complain.findAll({
        where: {
            user_id: user_id,
            isViwedByUser: false
        },
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});

//GO_INTO_POST
notifications.post("/complainMore", (req, res) => {
    const id = req.body.id;
    Complain.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Complain.update({
            isViwedByUser: true
        },
            {
                where: {
                    id: id
                }
            })
        res.json(result);
    });
});

//GO_INTO_COMPLAIN
notifications.post("/postMore", (req, res) => {
    const id = req.body.id;
    Post.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Post.update({
            isViwedByUser: true
        },
            {
                where: {
                    id: id
                }
            })
        res.json(result);
    });
});


module.exports = notifications