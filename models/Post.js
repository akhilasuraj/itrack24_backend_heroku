const Sequelize = require('sequelize')
const db = require("../database/db.js")


module.exports = db.sequelize.define(
    'posts',
    {
        UserID: {
            type: Sequelize.INTEGER
        },
        FirstName: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        PostContent:{
            type: Sequelize.STRING
        },
        PostTitle:{
            type: Sequelize.STRING
        },
        PostImg:{
            type: Sequelize.STRING
        },

        PostDisLike:{
            type: Sequelize.INTEGER
        },
        
        PostLike:{
            type: Sequelize.INTEGER
        },
        PostDate:{
            type: Sequelize.DATE
        },
        PostTime:{
            type: Sequelize.TIME
        },
        isViwedByUser:{
            type: Sequelize.BOOLEAN
        },

        isViwedByAdmin:{
            type: Sequelize.BOOLEAN
        },

        isAccepted:{
            type: Sequelize.BOOLEAN
        },
        isRejected:{
            type: Sequelize.BOOLEAN
        }

    },
    {
        timestamps: false
    }
)


