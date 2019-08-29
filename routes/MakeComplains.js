const express = require("express")
const complains = express.Router()
const cors = require("cors")


const Complain = require("../models/Complain")
complains.use(cors())

const complainData = {
   user_id:0,
   category:'',
   description:'',
   address1:'',
   address2:'',
   district:'',
   date: '',
   time: '',
   longitude:'',
   latitude:'',
   states:'pending',
   isAccepted:'',
}
//ADD_COMPLAIN
complains.post('/complain', (req, res) => {

   const complainData = {
      user_id: req.body.user_id,
      category: req.body.category,
      description: req.body.description,
      address1: req.body.address1,
      address2: req.body.address2,
      district: req.body.district,
      date: req.body.date,
      time: req.body.time,
      longitude: req.body.longitude,
      latitude: req.body.latitude

   }

   console.log(complainData)

   Complain.create(complainData)
      .then(comp => {
         res.send(comp)
      })

//GET_MY_COMPLAINS
   complains.get('/mycomplains', (req, res) => {
      Complain.findOne({
         where: {
            user_id: req.body.user_id
         }
      })
         .then((cmp) => {
            console.log(cmp);
            res.json(cmp);
         })
   })

})




module.exports = complains