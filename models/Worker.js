const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'workers',
    {

        LastName: {
            type: Sequelize.STRING
        },

        Nicno: {
            type: Sequelize.TEXT
        },

        Contact: {
            type: Sequelize.STRING
        },

        JobType1: {
            type: Sequelize.STRING
        },

        JobType2: {
            type: Sequelize.STRING
        },

        availability: {
            type: Sequelize.BOOLEAN
        }



    });