const { qf } = require('../qf');

module.exports = {
  createUser: qf('users/createUser.sql'),
  deleteUserById: qf('users/deleteUserById.sql'),
  getUserById: qf('users/getUserById.sql'),
};
