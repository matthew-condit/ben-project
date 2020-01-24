const Sequelize = require('sequelize');

const db = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite',
});



module.exports = {};
module.exports.db = db;
module.exports.users = require('./models/users');
// module.exports.posts = require('./posts');


