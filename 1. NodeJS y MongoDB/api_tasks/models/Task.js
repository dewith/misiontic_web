const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    taskId: Number,
    taskName: String,
    taskDetail: String,
});

module.exports = mongoose.model('task', TaskSchema, 'Tasks');