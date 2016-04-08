var http    =   require('http');

var mongojs = require("mongojs");
var express = require('express');
var app = express();

var databaseUrl = "myDatabase";
var collections = ["users"]
var db = mongojs(databaseUrl, collections);

//db.collections.save([{users: "moi"}]);


app.get('/', function(request, response) {
   response.send("Hello World");
});

app.listen(8080);
