const express = require('express');
const router = express.Router();
const Task = require('../models/modelTask')


router.get('/tasks', (req, res) => {
    res.json({list: ['hui']})
})

router.post('/newTask', (req, res) => {
    const {title, task} = req.query;
    console.log(req.query)

    // new Task()
})

module.exports = router;