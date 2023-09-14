const Sequelize = require('sequelize');
const sequelize = new Sequelize('NEW_DB', 'roshan', 'Lumiq@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
