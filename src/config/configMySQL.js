const DataTypes = require('sequelize');

const sequelize = new DataTypes('upload', 'root', '', {
  dialect: 'mysql',
  logging: false
});

const Customer = require('./../models/customers')(sequelize, DataTypes);

const config = () => {
  sequelize
    .sync()
    .then(() => {
      console.log('sync success', new Date());
    })
    .catch(err => {
      console.log('sync err', err);
    });
  return { Customer };
};

module.exports = config;
