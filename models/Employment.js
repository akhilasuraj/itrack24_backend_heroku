const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'employments',

    {
        workerID:{
            type : Sequelize.INTEGER
        },

        jobID:{
            type : Sequelize.INTEGER
        },
    });