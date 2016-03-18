var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var tasks = [];
var id = 0;

app.get('/tasks', function (req, res) {
    res.send(tasks);
});

app.post('/tasks', function (req, res) {
    var description = req.body.task;
    var task = {"id": id, "task": description}
    tasks.push(task);
    res.send(task);
    id = id + 1;
});

app.get('/tasks/:id', function (req, res) {
    var requestedTask;
    tasks.forEach(function (task) {
        if (task.id == req.params.id) {
            requestedTask = task;
        }
    })
    res.send(requestedTask);

});

app.put('/tasks/:id', function (req, res) {
    var description = req.body.task;
    var taskResponse;

    tasks.forEach(function (task) {
        if (task.id == req.params.id) {
            task.task = description;
            taskResponse = task;
        }
    })

    res.send(taskResponse);

});

app.delete('/tasks/:id', function (req, res) {
    var deletedTask;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == req.params.id) {
            deletedTask = tasks[i];
            tasks.splice(i, 1);
        }
    }
    res.send(deletedTask);
});


app.listen(3000, function () {
    console.log('Listening on port 3000')
});
