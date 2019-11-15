const express = require("express");
const complains = express.Router();
const multer = require('multer');
const cors = require("cors");
const Complain = require("../models/Complain");
const Section = require("../models/Section");
const Sequelize = require('sequelize');
complains.use(cors());


complainData = {
   user_id: 0,
   category: '',
   description: '',
   complainImg: '',
   address1: '',
   address2: '',
   district: '',
   date: '',
   time: '',
   longitude: 0,
   latitude: 0,
   isViwedByUser: '',
   isViwedCompletedByUser: '',
   isViwedByAdmin: '',
   isAccepted: '',
   isRejected: '',
   isAssigned: '',
   isCompleted:''
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
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            sectionName: sectionName,
            isViwedByUser: false,
            isViwedCompletedByUser: false,
            isViwedByAdmin: false,
            isAccepted: false,
            isRejected: false,
            isAssigned: false,
            isCompleted: false
         }
         Complain.create(complainData)
            .then(comp => {
               res.send({
                  message : "Your complaint has been succesfully reported. We will notify you when admin responded within it."
               })
               console.log(complainData);
            });
      }
      else{
         console.log("NO_SECTION_HAS_BEEN_MATCHED");
      }
   })



})


//GET_MY_COMPLAINS
complains.post('/mycomplains', (req, res) => {
   console.log(req.body.user_id);
   Complain.findAll({
      where: {
         user_id: req.body.user_id,
      },
      order: [
         ['id', 'DESC'], //GET_AS_DESCENDING_ORDER
      ]
   })
      .then((respond) => {
         res.json(respond)
      })
});

//GET_SELECTED_COMPLAIN
complains.post('/getselectedcomplain', (req, res) => {
   console.log(req.body.userid);
   Complain.findOne({
      where: {
         id: req.body.id
      }
   }).then((result) => {
      res.json(result);
      console.log("THIS_IS_SELECTED_NOTIFICATION_COMPLAINS")
      if (result) {
         Complain.update({
            isViwedByUser: true
         }, {
            where: {
               id: req.body.id
            }
         });
      }
      else {
         console.log("error");
      }
   });
});


module.exports = complains