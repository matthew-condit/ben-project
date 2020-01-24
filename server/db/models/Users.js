const Sequelize = require('Sequelize');

const db = require('../index').db;

const User = db.define('user', {
  username: {
	type: Sequelize.STRING,
	  allowNull: false
  }
}, {
});


// init code
const initUsers = () => {
   User.sync({force: true }).then(() => {
     return User.create({
       username: 'bcondit'
     });
   });
}

// Comment out
initUsers();
module.exports = User;
