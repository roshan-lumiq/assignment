const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Import your Sequelize configuration

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cityName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  stateName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countryName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
