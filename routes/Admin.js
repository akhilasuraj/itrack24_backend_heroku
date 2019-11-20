const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const admin = express.Router();
admin.use(cors());
const Complain = require("../models/Complain");
const Post = require("../models/Post");
const Supervisor = require("../models/Supervisor");
const User = require("../models/User");
const Worker = require("../models/Worker");
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
        jobcategory2: req.body.jobcategory2
    }

    Supervisor.findOne({
        where: {
            email: req.body.email
        }
    }).then((data) => {
        if (data) {
            console.log("SUPERVISOR_ALREADY_REGISTERED");
            res.json({
                message1: "Supervisor already exist. Email already registered"
            })
        }
        else {
            const hash = bcrypt.hashSync(SuperData.password, 10);
            SuperData.password = hash;
            Supervisor.create(SuperData)
                .then((data) => {
                    res.json({
                        message2:"Succesfully registered"
                    }); //SEND_SUPERVISOR_JOB_CATEGORY_AND_ID
                    console.log("SUPERVISOR_CREATED_SUCCESFULLY")
                });
        }
    }).catch((err) => {
        res.json(err);
    });
});




//REGISTER_WORKER
admin.post("/registerWorker", (req, res, err) => {
    const WorkerData = {
        LastName: req.body.lastname,
        Nicno: req.body.Nicno,
        Contact: req.body.Contact,
        JobType1: req.body.JobType1,
        JobType2: req.body.JobType2,
        availability: true,
        jobID : 0

    }

    Worker.findOne({
        where: {
            Nicno: req.body.Nicno
        }
    }).then((data) => {
        if (data) {
            console.log("WORKER_ALREADY_REGISTERED");
            res.json({
                message1:"Worker already exists"
            })
        }
        else {
            Worker.create(WorkerData)
                .then((data) => {
                    if (data) {
                        console.log("WORKER_CREATED_SUCCESFULLY");
                        res.json({
                            message2:"Succesfully registered"
                        })
                    }
                });
        }
    }).catch((err) => {
        res.json(err);
    });
});

//ADMIN_NOTIFICATIONS
admin.get("/compcount", (req, res) => {
    Complain.count({
        where: {
               isViwedByAdmin: false 
        }
    }).then((respond) => {
        res.json(respond);
    })
});

admin.get("/postcount", (req, res) => {
    Post.count({
        where: {
                 isViwedByAdmin: false 
        }
    }).then((respond) => {
        res.json(respond);
    })
});

//VIEW_NOTIFICATIONS
admin.get("/viewcompNotification", (req, res) => {
    User.hasMany(Complain, { foreignKey: 'user_id' })
    Complain.belongsTo(User, { foreignKey: 'user_id' }) //JOIN_USER_AND_COMPLAIN_TABLE
    Complain.findAll({
        where: {
           isViwedByAdmin: false,
           isAccepted : false,
           isRejected : false 
        },
        include: [User],
        order: [
            ['id', 'DESC']
        ]
    }).then((respond) => {
        res.json(respond);
    });
});


admin.get("/viewpostNotification", (req, res) => {
    Post.findAll({
        where: {
                isViwedByAdmin: false,
                isAccepted: false,
                isRejected: false
            
        }, order: [
            ['id', 'DESC']
        ]
    }).then((result) => {
        res.json(result);
    });
});


//GO_INTO_COMPLAIN
admin.post("/gointoComplain", (req, res) => {
    const id = req.body.id;
    console.log("post id is "+ id);
    User.hasMany(Complain, { foreignKey: 'user_id' })
    Complain.belongsTo(User, { foreignKey: 'user_id' }) //JOIN_USER_AND_COMPLAIN_TABLE

    Complain.findOne({
        where: {
            id: id
        },
        include: [User]
    }).then((result) => {
        Complain.update({
            isViwedByAdmin: true
        },
            {
                where: {
                    id: id
                }
            })
        res.json(result);
    });
});

//GO_INTO_POST
admin.post("/gointoPost", (req, res) => {
    const id = req.body.id;
    console.log("*/*/*/* " + id);
    Post.findOne({
        where: {
            id: id
        }
    }).then((result) => {
        Post.update({
            isViwedByAdmin: true
        },
            {
                where: {
                    id: id
                }
            })
            res.json(result);
            console.log(result);
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
            console.log("YOUR_COMPLAIN_HAS_BEEN_ACCEPTED");
        })

});


//REJECT_USER_COMPLAIN
admin.post("/rejectcomp", (req, res) => {
    const id = req.body.id;
    const reason = req.body.reason;
    console.log("this is the rejected reason " + reason);
    Complain.update({
        isRejected: true,
        reason : reason
    },
        {
            where: {
                id: id
            }
        }).then((result) => {
            res.json(result); //USING_THIS_RESPOND_CAN_NOTIFIY_THE_USER
            console.log("YOUR_COMPLAIN_HAS_BEEN_REJECTED");
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


module.exports = admin
