const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'jobs',

    {
        complainID: {
            type: Sequelize.INTEGER
        },

        supervisorID: {
            type: Sequelize.INTEGER
        },

        workStatus: {
            type: Sequelize.STRING
        },

        isAccepted: {
            type: Sequelize.BOOLEAN
        },

        isViewed: {
            type: Sequelize.BOOLEAN
        },

        isSatisfied: {
            type: Sequelize.BOOLEAN
        }
    }




)