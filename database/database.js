const Sequelize = require('sequelize')

const sequelize = new Sequelize('book_database', 'root', 'codewd', {dialect: "mysql"})

module.exports = sequelize