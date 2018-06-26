import {AppComponent} from "./app.component";

var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json())

var port =  8080;

var users = [
    {username: 'Admin', type: 'admin', password:'1111' },
    {username: 'Teacher', type: 'teacher', password:'1111' },
    {username: 'Manager', type: 'manager', password:'1111' },

];

var sessionHandler = require('./js/session_handler');
var store = sessionHandler.createObjectStore();

app.use(cookieParser());
app.use(session({
    store: store,
    resave:false,
    saveUninitialized: true,
    secret: 'supersecret'

}));
app.get('/', function (req, res) {
    res.sendFile(path.join(dirname),'index.html')
})

app.post('/login', function (req, res) {

    var foundUser;
    for(var i = 0; i < users.length; i++){
        var u = users[i];
        if(u.username == req.body.username && u.password == req.body.pass) {
            foundUser = u.username;
            break;
        }
    }
    if(foundUser != undefined){
        req.session.username = foundUser;
        console.log("Login succeeded: " ,req.session.username);
        res.send('Login succeeded: ' + 'sessionID: ' + req.session.id + '; user: ' + req.session.username);

    }
    else{
        console.log("Login failed: ", req.body.username);
        res.status(401).send('Login error');

    }
})
app.get('/logout', function (req, res) {
    req.session.username = '';
    console.log('logged out');
    res.send('logged out');
})
app.get('/check', function (req, res) {
    if(req.session.username){
        res.set('Content-Type', 'text/html');
        res.send('<h2>User ' + req.session.username + ' is logged in! </h1>')
    }
    else{
        res.send('not logged in');
    }
})

app.listen(port, function () {
    console.log(('app running on port ' + port ))
})