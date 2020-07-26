const express = require('express');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
    res.json({name: 'Ya', age: 16})
})

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