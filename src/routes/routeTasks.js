const express = require('express');
const router = express.Router();
const Task = require('../models/modelTask')


router.get('/tasks', (req, res) => {
    res.json({list: ['hui']})
})

router.post('/newTask', (req, res) => {
    console.log(req.body)

    // new Task()
})

module.exports = router;