 var express=require("express")
 var cors=require("cors")
 var crypto = require("crypto")
 const Sequelize=require('sequelize')
 var bodyParser=require("body-parser")
 var app= express()
 var path=require('path');
 var port=process.env.PORT || 3000

 app.use(bodyParser.json())
 app.use(cors())
 app.use(
       bodyParser.urlencoded({ extended: false})

 )

 var Users= require ("./routes/Users")
 var Complains= require ("./routes/Complains")
 var Images= require ("./routes/Images")
 var ProfileImages= require("./routes/ProfileImages")

app.use("/users", Users);
app.use("/users", Complains);
app.use("/users", Images);
app.use("/users", ProfileImages);
app.use(express.static(path.join(__dirname,'propics')))
app.use(express.static(path.join(__dirname,'uploads')))

app.listen(port, function(){

   console.log(" Wow Server is running on port" + " " + port);
})

 