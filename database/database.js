const Sequelize = require('sequelize');

const sequelize = new Sequelize('book-database', 'root', 'license1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
