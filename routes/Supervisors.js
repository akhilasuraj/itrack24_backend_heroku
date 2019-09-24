const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const supervisor = express.Router();
supervisor.use(cors());
const Complain = require("../models/Complain");
const Supervisor = require("../models/Supervisor");
const Job = require("../models/job");
const Sequelize = require('sequelize');


//SUPERVISOR_LOGIN
supervisor.post("/login", (req, res, err) => {
    Supervisor.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            if (bcrypt.compareSync(req.body.password, result.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 3600
                });
                res.json({ token: token, supervisorID: result.id })
            }
            else {
                console.log("PASSWORD_INCORRECT");
            }
        }
        else {
            console.log("USER_NOT_EXIST");
        }
    });
});


//SUPERVISOR_NOTIFICATIONS
supervisor.post("/jobcount", (req, res) => {
    Job.count({
        where: {
            isViwed: false,
            isAccepted: false,
            supervisorID: req.body.supervisorID  //HAVE_TO_GET_THE_ID_OF_CURRENT_LOGIN_SUPERVISOR_FROM_FRONTEND
        }
    }).then((respond) => {
        console.log("NOTIFICATION_FOR_NEW_COMPLAIN");
        res.json(respond);
    });
});

supervisor.post("/getjob", (req, res) => {
    Job.findOne({
        where: {
            isViwed: false,
            isAccepted: false,
            supervisorID: req.body.supervisorID
        }
    }).then((data) => {
        res.json(data);
    });
});

//VIEW_JOB
supervisor.post("/viewjob", (req, res) => {
    const compid = req.body.complainID; //COMPLAIN_ID
    const id = req.body.id; //JOB_ID
    console.log(compid)
    Complain.findOne({
        where: {
            id: compid
        }
    }).then((data) => {
        Job.update({
            isViwed: true  //MAKE_IS_VIWED_TRUE
        }, {
            where: {
                id: id
            }
        })
        res.json(data);
        console.log("HERE_IS_YOUR_NEW_JOB");
    });
});



//ACCEPT_JOB
supervisor.post("/acceptjob", (req, res) => {
    const id = req.body.id //JOB_ID
    Job.update({
        isAccepted: true
    }, {
        where: {
            id:id
        }
    }).then((result)=>{
        console.log("JOB_ACCEPTED");
    });
});

//GIVE_STATUS_OF_JOB
supervisor.post("/givestatus",(req,res)=>{
    const id = req.body.id //JOB_ID
    Job.update({
        workStatus:"completed"
    },{
        where:{
            id:id
        }
    }).then((data)=>{
        console.log("JOB_HAS_BEEN_COMPLETED");
    });
});

