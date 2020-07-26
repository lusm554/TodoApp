const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    task: String,
    done: Boolean
}, { timestamps: { createdAt: 'created_at' }})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;