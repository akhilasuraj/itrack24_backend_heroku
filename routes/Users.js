const express= require("express")
const users=express.Router()
const cors= require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
var async = require("async");
const nodemailer = require("nodemailer");
const User = require("../models/User")
var multer = require("multer");
users.use(cors())

process.env.SECRET_KEY = 'secret'

//REGISTER

var storage = multer.diskStorage({
  destination: (req,file, cb) => {
      cb(null, './propics');
  },

  filename: (req, file,cb) => {
      var filetype = '';
      console.log(file.mimetype)
    
      if(file.mimetype === 'image/jpg'){
          filetype = 'jpg';
     }
     if(file.mimetype === 'image/jpeg'){
      filetype = 'jpeg';
 }
     if(file.mimetype === 'image/png'){
      filetype = 'png';
    }
      cb(null, file.originalname + '-' + Date.now() + '.' + filetype);
  }
});

var upload=multer({
          storage:storage,
          limits:{
            fileSize:'10M',
          
          }
})

users.post('/register',(req, res)=>{
  // if(req.body.file){
  //   console.log('file received');
  // }
   const today= new Date()
   console.log(req.body)
   const userData = { 
        user_type :req.body.user_type,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        address : req.body.address,
        contact_num : req.body.contact_num,
        email : req.body.email, 
        password : req.body.password,
        profileimg :'',
        resetPasswordToken : req.body.resetPasswordToken,
        resetPasswordExpires : req.body.resetPasswordExpires,
        created : today
   } 
    User.findOne({
       where :{
            email: req.body.email
            
       }

    })
       .then((user) =>{
        console.log("user data ->>>>>>>>>>>>>>>")
           if(!user){
               const hash = bcrypt.hashSync(userData.password, 10)
               userData.password = hash;
               User.create(userData)
               .then(user =>{
                    //  res.send(req.file.filename);
                    let token = jwt.sign(user.dataValues,
                     process.env.SECRET_KEY,
                      {
                          expiresIn :1440
                    })
                      res.json({
                         token:token})
               })
               .catch(err =>{
                 res.send('error' + err)
               }) 
           }else{
               res.json({error : 'USER_ALREADY_EXISTS'})
           } 
       })
       .catch(err =>{
        res.send('error' + err)
      })
}) 




// LOGIN
  users.post('/login',(req, res)=> {
    console.log(req.body)
    User.findOne({
      where: {
           email: req.body.email
           //req.body kiyana eke thiyenne body parameters
           //req.query kiyana eke thiyenne query parameters
           //postman eken eeka select karala yawanna puluwan. query parameters enne url ekath ekkamai
           // body parameters enne request eke body ekath ekka
      }
    })
    .then(user =>{
      if(user){
        let id=user.id;
        console.log(id);
         if(bcrypt.compareSync(req.body.password, user.password)){
             let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
               expiresIn:1440
             })
             res.json({token : token})
         }else{
             res.json({error: 'INVALID_PASSWORD'})
         }
        }else{
          res.json({error: 'USER_DOES_NOT_EXIST'})
        }
    })
     .catch(err =>{
         res.send('error:' + err)
     })
  })

  //PROFILE
   users.get('/profile',(req, res) =>{
     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
     User.findOne({
           where:{
               id:decoded.id
           }
       })
        .then(user =>{
            if(user) {
              res.json(user)
            } else{
              res.json({error: "USER_DOES_NOT_EXIST"})
            }
        })
        .catch(err =>{
              res.send('error :' + err)
        })
   })



//UPDATE PROFILE
users.post('/editprofile',(req, res)=> {

    User.update({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      address : req.body.address,
      contact_num : req.body.contact_num,
      email : req.body.email
    },{ 
        where:{
              id:req.body.id
        }
      })

      User.findOne({
             where:{
                   email:req.body.email,
                 
             }         
      })
        .then(user=>{
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
            expiresIn:1440
        })
         res.json({token:token})
      })  
     .catch(err =>{
         res.send('error:' + err)
     })

    }) 

/*resetPassword*/

   

/*propic*/


module.exports = users

  