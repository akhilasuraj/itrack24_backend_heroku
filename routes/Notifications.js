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
                { isViwedByUser: false }
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
                { isViwedByUser: false }
            ]
        }
    }).then((respond) => {
        console.log(respond);
        res.json(respond);
    })
})


//VIEW_POST_NOTIFICATIONS_OF_USER
notifications.post('/viewPostNotifications', (req, res) => {
    Post.findAll({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isViwedByUser: false }
            ]
        }, order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});



//VIEW_COMPLAIN_NOTIFICATIONS_OF_USER
notifications.post('/viewCompNotifications', (req, res) => {
    Complain.findAll({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isViwedByUser: false }
            ]
        },
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});

//VIEW_RELEVANT_POST
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

//VIEW_RELEVANT_COMPLAIN
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