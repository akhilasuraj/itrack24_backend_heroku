const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'postLikes',
    {
        UserID: {
            type: Sequelize.INTEGER
        },

        PostID: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }

);