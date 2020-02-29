const { db } = require('../index');

const PostSql = require('../sql/posts/PostSql');

const getAllPosts = () => db.manyOrNone(PostSql.getAllPosts);

const getById = (id) => db.oneOrNone(PostSql.getById, { id });

const deleteById = (id) => db.oneOrNone(PostSql.deleteById, { id });

const createPost = (postObject) =>
  db.oneOrNone(PostSql.createNewPost, postObject);

module.exports = {
  getAllPosts,
  getById,
  deleteById,
  createPost,
};
