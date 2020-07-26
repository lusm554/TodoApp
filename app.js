const express = require('express');
const config = require('config');
const mongoose = require('mongoose')

mongoose.connect(config.get('MongoId'), {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use('/', require('./src/routes/routeTasks'))

const PORT = config.get('port')

app.listen(PORT)

/**
 * 1. GET 
 * get list of tasks
 * 2. POST
 * add task to list
 * 3. DELETE
 * delete task from list
 */