const Sequelize = require('sequelize')

const sequelize = new Sequelize('book_database', 'root', 'controller2', {dialect: "mysql"})

module.exports = sequelize