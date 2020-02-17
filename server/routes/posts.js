const express = require('express');

const router = express.Router();

const { Post } = require('../db/index');

// get all posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

// get post by ID
router.get('/:userId', async (req, res, next) => {
  return res.send({
    message: 'implement',
  });
});

// create new post
router.post('/', async (req, res, next) => {
  return res.send({
    message: 'implement',
  });
});

module.exports = router;
