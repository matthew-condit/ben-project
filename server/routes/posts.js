const express = require('express');

const router = express.Router();

const { posts: Posts } = require('../db/index');

// get all pots
router.get('/', async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.send(users);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

router.get('/:userId', async (req, res, next) => {
  return res.send({
    message: 'implement',
  });
});

// posting to users creates a new user
router.post('/', async (req, res, next) => {
  return res.send({
    message: 'implement',
  });
});

module.exports = router;
