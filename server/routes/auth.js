const express = require('express');

const router = express.Router();

const { User, Session } = require('../db/index');

router.post('/login', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

router.post('/logout', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const newUser = await User.createUser({
      username: req.body.params.username,
      password: req.body.params.password,
    });

    // todo: create session
    const sessionToken = Math.random().toString();

    res.send(sessionToken);
  } catch (e) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
