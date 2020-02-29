const { qf } = require('../qf');

module.exports = {
  deleteById: qf('posts/deleteById.sql'),
  createNewPost: qf('posts/createNewPost.sql'),
  createPostTable: qf('posts/createPostTable.sql'),
  getById: qf('posts/getById.sql'),
  getAllPosts: qf('posts/getAllPosts.sql'),
};
