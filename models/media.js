const Sequelize = require('sequelize')

const sequelize = require('../database/database')

const Media = sequelize.define('media', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mediaType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateCompleted:{
        type: Sequelize.STRING,
        allowNull: false
    },
    notes:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    rating:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    webLink: {
        type: Sequelize.STRING,
    },
    videoId: {
        type: Sequelize.STRING,
    }

})



module.exports = Media