const express = require('express');
const router = express.Router();
const Task = require('../models/modelTask')

// get list of tasks
router.get('/tasks', (req, res) => {
    Task.find().then((...a) => res.json(a[0]))
})

// create new task
router.post('/newTask', (req, res) => {
    new Task(req.body).save((err, doc) => {
        if(err) {
            res.status(404).send('error')
            throw err;
        }

        res.json(doc)
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    Task.deleteOne({_id: id}, (err) => {
        if(err) {
            res.status(404).json({err: err});
            return console.error(err)
        }

        res.json({status: 200})
    })
})

module.exports = router;