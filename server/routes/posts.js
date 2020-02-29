const express = require('express');

const router = express.Router();

const { Post } = require('../db/index');

// get all posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

// get post by ID
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.getById(req.params.postId);
    res.send(post);
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
    const posts = await Post.createPost(paramPost);
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

router.delete('/:postId', async (req, res, next) => {
  try {
    await Post.deleteById(req.params.postId);
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
