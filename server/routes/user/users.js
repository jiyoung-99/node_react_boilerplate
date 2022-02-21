const express = require('express');
const { User } = require('../../models/Users');
const lightwallet = require('eth-lightwallet');
const userControllers = require('../../controllers/user.controllers');
const fs = require('fs');
const router = express.Router();

router.get('/hello', (req, res) => {
  console.log("hello");
  res.json({ "hello": "world" });
});

router.post('/register', userControllers.findUser);

module.exports = router;
