const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supervisor = express.Router();
supervisor.use(cors());
const Complain = require("../models/Complain");
const Supervisor = require("../models/Supervisor");
const Job = require("../models/job");
const Worker = require("../models/Worker");
const Sequelize = require('sequelize');


//SUPERVISOR_LOGIN
supervisor.post("/login", (req, res, err) => {
    Supervisor.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            console.log(result.email);
            console.log(req.body.password);
            if (bcrypt.compareSync(req.body.password, result.password)) {
                let token = jwt.sign(result.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 3600
                });
                res.json({ contactno: contactno,firstname:firstname,lastname:lastname,email:email, token:token, supervisorID: result.id, jobcategory1: result.jobcategory1, jobcategory2: result.jobcategory2}); //SEND_JOBCATEGORIES
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


//GET_SUPERVISOR'S_RELEVANT_ALL_COMPLAINS
supervisor.post("/getjob", (req, res) => {
    const cat1 = req.body.jobcategory1; //SUPERVISOR_CATEGORY
    const cat2 = req.body.jobcategory2;

    Complain.findAll({
        where: {
            [Sequelize.Op.or]: [
                { sectionName: cat1 },
                { sectionName: cat2 }
            ],
            isAssigned: false,
            isAccepted: true
        }
    }).then((result) => {
        res.json(result);
        console.log("SUITABLE_COMPLAINS_FOR_A_SUPERVISOR");
    })
});

//GO_INTO_COMPLAIN
supervisor.post("/viewjob", (req, res) => {
    const id = req.body.id;
    User.hasMany(Complain, { foreignKey: 'user_id' })
    Complain.belongsTo(User, { foreignKey: 'user_id' }) //JOIN_USER_AND_COMPLAIN_TABLE
    Complain.findOne({
        where: {
            id: id
        }
    }).then((data) => {
        res.json(data);
    })
});


//ADD_WORKERS_TO_SPECIFIC_JOB
supervisor.post("/addworker", (req, res) => {
    const JobType = req.body.category;
    const amount = req.body.amount;
    Worker.findAndCountAll({
        where: {
            [Sequelize.Op.or]: [
                { JobType1: JobType },
                { JobType2: JobType }
            ],
            availability: true
        },
        limit: amount
    })
        .then((result) => {
            res.json(result);
            console.log(result.count);
            console.log(result.rows);

        })
});



//ACCEPT_BY_THE_SUPERVISOR
supervisor.post("/addjob", (req, res) => {
    const supervisorID = req.body.supervisorID; //GET_THE_SUPERVISOR_ID
    Job.count({
        where: {
            supervisorID: supervisorID,
            isWorkOn : true 
        }  
    }).then((result) => {
        console.log(result);
        if (result >=2) {                 //CHECK_THE_WORK_ON_COMPLAINS_EXCEED_THE_MAX(2)
            console.log("YOU_HAVE_RECEIVED_MAXIMUM_NUM_OF_COMPLAINS_ALREADY");
            res.json(result);
        }

        else {
            const jobData = {
                complainID: req.body.complainID,
                supervisorID: supervisorID,
                workStatus: 'in progress',
                isWorkOn: true,
                isSatisfied: false
            }
            Job.create(jobData)
                .then((result) => {
                    if (result) {
                        Complain.update({
                            isAssigned: true
                        }, {
                            where: {
                                id: req.body.complainID
                            }
                        })
                        res.json(result);
                        console.log("NEW_JOB_CREATED_SUCCESFULLY");
                    }
                    else {
                        console.log("JOB_CREATION_FAILED");
                    }
                });

        }
    })


});


//ACCEPT_JOB
supervisor.post("/acceptjob", (req, res) => {
    const id = req.body.id //JOB_ID
    Job.update({
        isAccepted: true
    }, {
        where: {
            id: id
        }
    }).then((result) => {
        console.log("JOB_ACCEPTED");
    });
});

//GIVE_STATUS_OF_JOB
supervisor.post("/givestatus", (req, res) => {
    const id = req.body.id //JOB_ID
    Job.update({
        workStatus: "completed"
    }, {
        where: {
            id: id
        }
    }).then((data) => {
        console.log("JOB_HAS_BEEN_COMPLETED");
    });
});

module.exports = supervisor;
