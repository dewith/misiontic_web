
const express = require('express');
const router = express.Router();

const TaskSchema = require('./models/Task.js')

// CRUD Operations
router.get('/', (req, res) => {
    res.send('This is the home of my API');
});

router.get('/task', (req, res) => {
    TaskSchema.find(function (err, data) {
        if (err) {
            console.log('Error reading tasks');
        }
        res.send(data);
    });
});

router.post('/task', (req, res) => {
    let newTask = new TaskSchema({
        taskId: req.body.id,
        taskName: req.body.name,
        taskDetail: req.body.detail,
    });

    newTask.save(function (err, data) {
        if (err) {
            console.log(err);
        }
        res.send('Task stored successfully.');
    });
});

// Export this router to use in our index.js
module.exports = router;