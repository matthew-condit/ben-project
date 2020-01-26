const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = {};
module.exports.db = db;
module.exports.User = require('./models/User');
module.exports.Post = require('./models/Post');
