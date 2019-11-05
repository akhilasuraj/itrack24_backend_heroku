 const Sequelize = require("sequelize")
 const db={}
  const sequelize = new Sequelize("mysql://b6d6f17f2bf84c:9b795c39@us-cdbr-iron-east-02.cleardb.net/heroku_a011717956c50d8?reconnect=true")
//  const sequelize = new Sequelize("login","root","",{
//     host : "localhost",
//     dialect : "mysql",
//     operatorAliases: false,

//      pool:{
//           max:5,
//           min:0,
//           acquire:30000,
//           idle:10000

//      }

// })
    db.sequelize=sequelize
    db.Sequelize=Sequelize 

    module.exports = db;