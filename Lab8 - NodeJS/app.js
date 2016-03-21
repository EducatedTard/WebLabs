var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const tasksModule = require('./tasks.js');
tasksModule.getTasks(app);
tasksModule.getTaskId(app);
tasksModule.deleteTask(app);
tasksModule.postTask(app);
tasksModule.putTask(app);


app.listen(3000, function () {
    console.log('Listening on port 3000')
});
