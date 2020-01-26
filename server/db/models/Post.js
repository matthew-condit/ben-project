const Sequelize = require('sequelize');

const { db } = require('../index');

const Post = db.define(
  'post',
  {
    // TODO: add fields here
    // username: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
  },
  {},
);

// init code
const initPosts = () => {
  Post.sync({ force: true }).then(() =>
    Post.create({
      username: 'bcondit',
    }),
  );
};

// Comment out
initPosts();
module.exports = Post;
