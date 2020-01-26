const Sequelize = require('sequelize');

const { db } = require('../index');

const User = db.define(
  'user',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {},
);

// init code
const initUsers = () => {
  User.sync({ force: true }).then(() =>
    User.create({
      username: 'bcondit',
    }),
  );
};

// Comment out
initUsers();
module.exports = User;
