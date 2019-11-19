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
            isViwedByUser: false,
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isRejected: true }
            ]
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
            isViwedByUser: false,
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isRejected: true }
            ]
        }
    }).then((respond) => {
        console.log(respond);
        res.json(respond);
    })
});

//COMPLETED_COMPLAINS_COUNT 
notifications.post('/getcompletedcomplains', (req, res) => {
    const user_id = req.body.user_id;
    Complain.count({
        where: {
            user_id: user_id,
            isViwedCompletedByUser: false,
            isCompleted: true
        }
    }).then(result => {
        res.json(result);
    })
});

//--------------------------------------------------------------------->

//VIEW_POST_NOTIFICATIONS_FOR_USER
notifications.post('/viewPostNotifications', (req, res) => {
    const UserID = req.body.UserID;
    Post.findAll({
        where: {
            UserID: UserID,
            isViwedByUser: false,
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isRejected: true }
            ]
        },
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});


//VIEW_ACCEPTED_||_REJECTED_COMPLAIN_NOTIFICATIONS_FOR_USER
notifications.post('/viewCompNotifications', (req, res) => {
    const user_id = req.body.user_id;
    Complain.findAll({
        where: {
            user_id: user_id,
            isViwedByUser: false,
            [Sequelize.Op.or]: [
                { isAccepted: true },
                { isRejected: true }
            ]
        },
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        console.log(respond);
        res.json(respond);
    });
});

//VIEW_COMPLETED_COMPLAINS_NOTIFICATIONS
notifications.post('/viewCompletedCompNotifications', (req, res) => {
    const user_id = req.body.user_id;
    Complain.findAll({
        where: {
            user_id: user_id,
            isViwedCompletedByUser: false,
            isCompleted: true,

        },
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});

//--------------------------------------------------------------------->

//GO_INTO_ACCEPTED_||_REJECTED_COMPLAINS
notifications.post("/complainMore", (req, res) => {
    const id = req.body.id;
    Complain.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Complain.update({
            isViwedByUser: true
        }, {
            where: {
                id: id
            }
        })
        res.json(result);
    });
});

//GO_INTO_COMPLETED_COMPLAINS
notifications.post("/completedcomplainMore", (req, res) => {
    const id = req.body.id;
    const rate = req.body.rate;

    Complain.update({
        isViwedCompletedByUser: true
    }, {
        where: {
            id: id
        }
    }).then(result => {
        Job.update({
            Rating: rate
        }, {
            where: {
                complainID: id
            }
        })
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
        }, {
            where: {
                id: id
            }
        })
        res.json(result);
    });
});




module.exports = notifications