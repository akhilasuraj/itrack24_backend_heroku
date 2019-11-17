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

        isWorkOn: {
            type: Sequelize.BOOLEAN
        },
        rating: {
            type: Sequelize.STRING
        },

        isWorkersAdded: {
            type: Sequelize.BOOLEAN
        }

    });