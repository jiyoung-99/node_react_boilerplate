const express = require('express');
const lightwallet = require('eth-lightwallet');
const fs = require('fs');
const { User } = require('../../models/Users');
const userControllers = require('../../controllers/user.controllers');

const router = express.Router();

router.get('/hello', (req, res) => {
  console.log('hello');
  res.json({ hello: 'world' });
});

router.post('/register', userControllers.findUser);

module.exports = router;
