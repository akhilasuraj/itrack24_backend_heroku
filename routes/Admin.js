const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const admin = express.Router();
admin.use(cors());
const Complain = require("../models/Complain");
const Post = require("../models/Post");
const Supervisor = require("../models/Supervisor");
const Job = require("../models/job");
const Sequelize = require('sequelize');



//REGISTER_SUPERVISOR
admin.post("/registerSupervisor", (req, res, err) => {
    const SuperData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contactno: req.body.contactno,
        email: req.body.email,
        password: req.body.password,
        jobcategory1: req.body.jobcategory1,
        jobcategory2: req.body.jobcategory2,
        availability: true
    }

    Supervisor.findOne({
        where: {
            email: req.body.email
        }
    }).then((data) => {
        if (data) {
            console.log("SUPERVISOR_ALREADY_REGISTERED");
        }
        else {
            const hash = bcrypt.hashSync(SuperData.password, 10);
            SuperData.password = hash;
            Supervisor.create(SuperData)
                .then((data) => {
                    res.json(data);
                    console.log("SUPERVISOR_CREATED_SUCCESFULLY")
                });
        }
    }).catch((err) => {
        res.json(err);
    });
});

//ADMIN_NOTIFICATIONS
admin.post("/compcount", (req, res) => {
    Complain.count({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: false },
                { isViwed: false }
            ]
        }
    }).then((respond) => {
        res.json(respond);
    })
});

admin.post("/postcount", (req, res) => {
    Post.count({
        where: {
            [Sequelize.Op.or]: [
                { isAccepted: false },
                { isViwed: false }
            ]
        }
    }).then((respond) => {
        res.json(respond);
    })
});

//VIEW_NOTIFICATIONS
admin.post("/viewcomp", (req, res) => {
    const id = req.body.compid; //ID_RECEIVED_BY_CLICKING_NOTIFICATION
    Complain.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Complain.update({
            isViwed: true   //AFTER_VIEW_SET_ISVIEWD_TRUE
        }, {
            where: {
                id: id
            }
        });
        res.json(result);
    });
});


admin.post("/viewpost", (req, res) => {
    const id = req.body.postid; //ID_RECEIVED_BY_CLICKING_NOTIFICATION
    Post.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Post.update({
            isViwed: true    //AFTER_VIEW_SET_ISVIEWD_TRUE
        }, {
            where: {
                id: id
            }
        });
        res.json(result);
    });
});

//ACCEPT_USER_COMPLAIN
admin.post("/acceptcomp", (req, res) => {
    const id = req.body.id;
    Complain.update({
        isAccepted: true
    },
        {
            where: {
                id: id
            }
        }).then((result) => {
            res.json(result); //USING_THIS_RESPOND_CAN_NOTIFIY_THE_USER
            console.log("YOUR_COMPLAINE_HAS_BEEN_ACCEPTED");
        })

});

//ACCEPT_USER_POST
admin.post("/acceptpost", (req, res) => {
    const id = req.body.id;
    Post.update({
        isAccepted: true
    },
        {
            where: {
                id: id
            }
        }).then((result) => {
            res.json(result); //USING_THIS_RESPOND_CAN_NOTIFIY_THE_USER
            console.log("YOUR_POST_HAS_BEEN_ACCEPTED");
        })

});


//REJECT_USER_POST
admin.post("/rejectpost", (req, res) => {
    const id = req.body.id;
    Post.update({
        isRejected: true
    },
        {
            where: {
                id: id
            }
        }).then((result) => {
            res.json(result); //USING_THIS_RESPOND_CAN_NOTIFIY_THE_USER
            console.log("YOUR_POST_HAS_BEEN_REJECTED");
        })

});

//SELECT_SUITABLE_JOB_CATEGORY_SUPERVISORS
admin.post("/selectsupervisor", (req, res) => {
    const category = req.body.category;
    console.log(category);
    Supervisor.findAll({
        where: {
            [Sequelize.Op.or]: [
                { jobcategory1: category },
                { jobcategory2: category }
            ],
            availability: true
        }
    }).then((result) => {
        console.log("HERE_RELEVANT_SUPERVISORS_FOR_COMPLAIN")
        res.json(result);
    });
});

//ADD_NEW_JOB_FOR_NEW_COMPLAIN
admin.post("/addjob", (req, res) => {
    const jobData = {
        complainID: req.body.id,
        supervisorID: req.body.supervisorID,
        workStatus: 'in progress',
        isAccepted: false,
        isSatisfied: false
    }

    Job.create(jobData)
        .then((result) => {
            if (result) {
                res.json(result);
                console.log("JOB_CREATED_SUCCESFULLY");
            }
            else {
                console.log("JOB_CREATION_FAILED");
            }
        });
});











module.exports = admin
