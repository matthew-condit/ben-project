const Sequelize = require('sequelize');

const { db } = require('../index');

const Post = db.define(
  'post',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {},
);

// init code
const initPosts = () => {
  Post.sync({ force: true }).then(() =>
    Post.create({
      title: 'Testing 1 2',
      body:
        "This is a test body.  This can get really long but for now it's short",
    }),
  );
};

// Comment out
initPosts();
module.exports = Post;
