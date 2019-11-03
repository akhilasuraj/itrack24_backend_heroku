const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'sections',

    {
        section_name:{
            type : Sequelize.STRING
        },

        subcategory1:{
            type : Sequelize.STRING
        },

        subcategory2:{
            type : Sequelize.STRING
        },

        subcategory3:{
            type : Sequelize.STRING
        }
    });