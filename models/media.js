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
        type: Sequelize.DATE,
        allowNull: false
    },
    notes:{
        type: Sequelize.DATE,
        allowNull: false
    },
    rating:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})



module.exports = Media