var users = [];
var id = 0;


var mongojs = require("mongojs");
var databaseUrl = "myDatabase";

var db = mongojs(databaseUrl, []);
var collection = db.collection('users');

module.exports = {
    getUsers: function(app){
        app.get('/users', function (req, res) {
            console.log("GET Users");
            collection.insert({users:'users'});
            res.send({"users": users});
        });
    },
    postUser: function(app){

        app.post('/tasks', function (req, res) {
            var description = req.body.task;
            var task = {"id": id, "task": description}
            tasks.push(task);
            res.send(task);
            id = id + 1;
        });
    },
    getUserId: function(app){
        app.get('/tasks/:id', function (req, res) {
            var requestedTask;
            tasks.forEach(function (task) {
                if (task.id == req.params.id) {
                    requestedTask = task;
                }
            });
            res.send(requestedTask);

        });
    },
    putUser: function(app){
        app.put('/tasks/:id', function (req, res) {
            var description = req.body.task;
            var taskResponse;

            tasks.forEach(function (task) {
                if (task.id == req.params.id) {
                    task.task = description;
                    taskResponse = task;
                }
            });

            res.send(taskResponse);

        });
    },
    deleteUser: function(app){
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
    }
};
