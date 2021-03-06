const express = require('express');

const router = express.Router();

const { User } = require('../db/index');

// get all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
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
