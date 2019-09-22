const Sequelize = require('sequelize')
const db = require("../database/db.js")


module.exports = db.sequelize.define(
   'supervisors',

   {
      firstname: {
         type: Sequelize.STRING
      },

      lastname: {
         type: Sequelize.STRING
      },

      contactno: {
         type: Sequelize.INTEGER
      },

      email: {
         type: Sequelize.INTEGER
      },

      password: {
         type: Sequelize.STRING
      },

      jobcategory1: {
         type: Sequelize.STRING
      },
      
      jobcategory2: {
         type: Sequelize.STRING
      },

      availability: {
         type: Sequelize.BOOLEAN
      },

   }

)