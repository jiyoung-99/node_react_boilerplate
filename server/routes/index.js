const express = require('express');
const userRouter = require('./user/users');

const app = express();

app.use('/users', userRouter);

module.exports = app;
