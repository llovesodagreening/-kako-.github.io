var express = require('express');
var fs = require('fs');
var calc = require('./calc.js');

var app = express();

app.get('/add/:a/:b', function(req,res){
	res.send((parseInt(req.params.a) + parseInt(req.params.b)).toString());
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.use('/static',express.static(__dirname+'/static'))

app.get('/test', function(req, res) {
	res.send('Yes, this is a test');
});	

app.listen(5566, function(err) {
  console.log('Listening on port 5566');
});




