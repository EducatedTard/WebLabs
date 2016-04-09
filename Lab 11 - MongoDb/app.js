var http    =   require('http');


var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const usersModule = require('./users.js');
usersModule.getUsers(app);
usersModule.getUserId(app);
usersModule.deleteUser(app);
usersModule.postUser(app);
usersModule.putUser(app);


app.listen(8080, function(){
    console.log("listen on port 8080");
});


