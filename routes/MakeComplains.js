const express = require("express");
const complains = express.Router();
const multer = require('multer');
const cors = require("cors");
const Complain = require("../models/Complain");
const Section = require("../models/Section");
const Job = require("../models/job");
const Sequelize = require('sequelize');
complains.use(cors());


complainData = {
   user_id: 0,
   category: '',
   description: '',
   complainImg: '',
   date: '',
   time: '',
   location: '',
   longitude: 0,
   latitude: 0,
   isViwedByUser: '',
   isViwedCompletedByUser: '',
   isViwedByAdmin: '',
   isAccepted: '',
   isRejected: '',
   reason:'',
   isAssigned: '',
   isCompleted: ''
}



var storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads');
   },

   filename: (req, file, cb) => {
      var filetype = '';
      if (file.mimetype === 'image/jpg') {
         filetype = 'jpg';
      }
      if (file.mimetype === 'image/png') {
         filetype = 'png';
      }
      if (file.mimetype === 'image/jpeg') {
         filetype = 'jpeg';
      }
      cb(null, file.originalname + '-' + Date.now() + '.' + filetype);
   }
});


var upload = multer({
   storage: storage,
   limits: { fileSize: '10M' }
});

//ADD_COMPLAIN
complains.post('/complain', upload.single('compImg'), (req, res) => {
   const category = req.body.category;
   Section.findOne({
      where: {
         [Sequelize.Op.or]: [
            { subcategory1: category },
            { subcategory2: category },
            { subcategory3: category }
         ]
      }
   }).then(sec => {
      if (sec) {
         console.log(sec);
         sectionName = sec.section_name;
         console.log(sectionName);

         const complainData = {
            user_id: req.body.user_id,
            category: req.body.category,
            description: req.body.description,
            complainImg: req.file.filename,
            date: req.body.date,
            time: req.body.time,
            location: req.body.location,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            sectionName: sectionName,
            isViwedByUser: false,
            isViwedCompletedByUser: false,
            isViwedByAdmin: true,
            isAccepted: true,
            isRejected: false,
            reason:'',
            isAssigned: false,
            isCompleted: false
         }
         Complain.create(complainData)
            .then(comp => {
               res.send({
                  message: "Your complaint has been succesfully reported. We will notify you when admin responded within it."
               })
               console.log(complainData);
            });
      }
      else {
         console.log("NO_SECTION_HAS_BEEN_MATCHED");
      }
   });
});


//-------------------MY COMPLAINS-----------------

//ACCCEPTABLE_COMPLAINS ---------------------> lets take status
complains.post('/acceptedcomplains', (req, res) => {
   Complain.findAll({
      where: {
         user_id: req.body.user_id,
         isAccepted: true
      },
      order: [
         ['id', 'DESC'], //GET_AS_DESCENDING_ORDER
      ]
   }).then((respond) => {
      res.json(respond)
      console.log("HERE_ACCPTED_COMPLAINS");
   })
});

//EDITABLE_COMPLAINS
complains.post("/editablecomplains", (req, res) => {
   const user_id = req.body.user_id;
   Complain.findAll({
      where: {
         user_id: user_id,
         isAccepted: false,
         isRejected: false
      }, order: [
         ['id', 'DESC'], //GET_AS_DESCENDING_ORDER
      ]
   }).then(result => {
      res.json(result);
      console.log("HERE_EDITABLE_COMPLAINS");
   })
});

//DELETE_EDITABLE_COMPLAINS
complains.post("/deletecomplains", (req, res) => {
   const id = req.body.id;
   Complain.destroy({
      where: {
         id: id
      }
   }).then(result => {
      res.json({
         message: "Your Complain has been deleted."
      })
      console.log("COMPLAIN_DELETED");
   })
});

//RATE_JOB
complains.post("/ratejob", (req, res) => {
   const id = req.body.id;
   const currentRate = req.body.rate;
   console.log(id);
   console.log(currentRate);

   Job.update({
      rating: currentRate
   }, {
      where: {
         complainID: id
      }
   }).then(result => {
      Complain.update({
         isViwedCompletedByUser: true
      }, {
         where: {
            id: id
         }
      }).then(respond => {
         res.json(respond);
         console.log("RATED_SUCCESFULLY");
      });
   });
});


//-------------itrack24 MobileClient----------------------/

//GET_MY_ALL_COMPLAINS
complains.post("/getallcomplains", (req, res) => {
   const user_id = req.body.user_id;
   Complain.findAll({
      where: {
         user_id: user_id
      },
      order: [
         ['id', 'DESC'], //GET_AS_DESCENDING_ORDER
      ]

   }).then(result => {
      res.json(result);
      // console.log("HERE_YOUR_ALL_COMPLAINS");
   });
});




module.exports = complains