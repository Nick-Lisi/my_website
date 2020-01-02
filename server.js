//Source on how to connect to Heroku
//https://www.youtube.com/watch?v=P86N9FqNqso

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

//app.use(express.static('public'));

app.get('/', function(req, res){
    res.render("index");
})

app.put('/', function (req, res) {
    res.send('index')
  })

app.post('/', function (req, res) {
    res.send('index')
  })

app.listen(port, function(){
    console.log("app running")
})