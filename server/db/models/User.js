const { db } = require('../index');

const UserSql = require('../sql/users/UserSql');

const getUserById = (id) => db.one(UserSql.getUserById, { id });
const createUser = (userObj) => db.one(UserSql.createUser, userObj);
const deleteUser = (id) => {};
module.exports = {
  createUser,
  deleteUser,
};
