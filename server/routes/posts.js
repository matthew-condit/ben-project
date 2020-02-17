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
router.get('/:postId', async (req, res, next) => {
  try {
    const posts = await Post.findByPk(req.params.postId);
    res.send(posts);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

// create new post
router.post('/', async (req, res, next) => {
  console.error(req.body.params);
  try {
    const paramPost = req.body.params.post;
    const posts = await Post.create(paramPost);
    res.send(posts);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
