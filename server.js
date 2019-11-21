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

 var Users= require ("./routes/Users");
 var Complains= require ("./routes/MakeComplains");
 var ProfileImages= require("./routes/ProfileImages");
 var MakePosts=require("./routes/MakePosts");
 var GetPosts=require("./routes/GetPosts");
 var Charts=require("./routes/Charts");
 var Notifications=require("./routes/Notifications");
 var Admin=require("./routes/Admin");
 var Supervisor=require("./routes/Supervisors");


app.use("/users", Users);
app.use("/users", Complains);
app.use("/users", ProfileImages);
app.use("/users", MakePosts);
app.use("/users", GetPosts);
app.use("/users", Charts);
app.use("/users", Notifications);
app.use("/admin", Admin);
app.use("/supervisor",Supervisor);


app.use(express.static(path.join(__dirname,'propics')));
app.use(express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'postImages')));

app.listen(port,'192.168.1.30',function(){

   console.log(" Wow Server is running on port" + " " + port);
//    'https://itrack24-backend-heroku.herokuapp.com'
})

 