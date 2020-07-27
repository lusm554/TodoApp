const express = require('express');
const router = express.Router();
const Task = require('../models/modelTask')

// get list of tasks
router.get('/tasks', (req, res) => {
    try {
        Task.find().then((...a) => res.json(a[0]))
    } catch (err) {
        res.status(404).json({err})
    }
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

// delete task
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

// change task
router.put('/change/:id', (req, res) => {
    const { title, task, done} = req.body;

    const { id } = req.params;

    // exclude values that are undefined
    const a = JSON.stringify({title, task, done})

    Task.updateOne({_id: id}, JSON.parse(a), (err, doc) => {
        if(err) {
            res.status(404).json({err})
            return console.log(err)
        }

        res.json({status: 200, doc})
    })
})

module.exports = router;
