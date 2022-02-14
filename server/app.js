const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/key');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
