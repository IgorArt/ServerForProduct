// include modules
//var util = require('util');
var express = require('express');
var app = express();

//Creating Router() object
//Add Orm 
//var Sequelize = require('sequelize');
//var sequelize = new Sequelize('database', 'username', 'password');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser());

//Synchonous read File
//  app.get("/readProducts", function (req, res) {
//      var message = fs.readFileSync('products.txt').toString();
//      console.log(message);
//      res.sendStatus(200);
//  });
//Asyncronous read File
app.get("/readProducts", function (req, res) {
    fs.readFile('/Server/products.txt', function (err, data) {
        if (err) throw err;
        console.log('Data:' + data.toString());
        res.send(data.toString());
    });

});

//Asyncronous write File
app.post("/writeTop", function (req, res) {
    var message = JSON.stringify(req.body);

    fs.writeFile('/Server/top.txt', message, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log(message);
    console.log("The top was saved!");
    res.send(200);
});


//Synchronous read File
app.get("/readTop", function (req, res) {
    var message = fs.readFileSync('top.txt').toString();
    console.log(message);
    res.send(message);
    //res.sendStatus(200);
});

//Asyncronous write File
app.post("/writeProducts", function (req, res) {
    var message = JSON.stringify(req.body);
    fs.writeFile("/Server/products.txt", message, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log(message);
    console.log("The products was saved!");
    res.send(200);
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening');
});

 /* serves all the static files */

