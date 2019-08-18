const express= require("express")
const complains=express.Router()
const cors= require("cors")


const Complain = require("../models/Complain")
complains.use(cors())

process.env.SECRET_KEY = 'secret'

//REGISTER

complains.post('/complain',(req, res)=>{
   
   const complainData = { 
    user_id: req.body.user_id,
    category : req.body.category,
    description : req.body.description,
    address1 : req.body.address1,
    address2: req.body.address2,
    district :req.body.district,
    date :req.body.date,
    time :req.body.time,
    longitude : req.body.longitude,
    latitude : req.body.latitude

   }

   console.log(complainData)

   Complain.create(complainData)
   .then(comp=>{
      res.send(comp)
   })


})




module.exports=complains