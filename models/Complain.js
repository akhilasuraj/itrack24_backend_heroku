const Sequelize = require('sequelize')
const db = require("../database/db.js")


module.exports = db.sequelize.define(
   'complain',
   {
      //  complain_id needed
      user_id: {
         type: Sequelize.INTEGER
      },
      category: {
         type: Sequelize.STRING
      },

      description: {
         type: Sequelize.STRING
      },
      complainImg: {
         type: Sequelize.STRING
      },
      date: {
         type: Sequelize.STRING
      },
      time: {
         type: Sequelize.STRING
      },

      longitude: {
         type: Sequelize.FLOAT
      },

      latitude: {
         type: Sequelize.FLOAT
      },

      sectionName: {
         type: Sequelize.STRING
      },

      isViwedByUser: {
         type: Sequelize.BOOLEAN
      },

      isViwedCompletedByUser: {
         type: Sequelize.BOOLEAN
      },

      isViwedByAdmin: {
         type: Sequelize.BOOLEAN
      },

      isAccepted: {
         type: Sequelize.BOOLEAN
      },

      isRejected: {
         type: Sequelize.BOOLEAN
      },
      
      reason:{
         type: Sequelize.STRING
      },

      isAssigned: {
         type: Sequelize.BOOLEAN
      },

      isCompleted: {
         type: Sequelize.BOOLEAN
      }
   },

   {
      timestamps: false
   }
)
