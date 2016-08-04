var express = require('express');
var fs = require('fs');
var calc = require('./calc.js');

var app = express();

app.get('/haha',function(req,res){
	var a = {
		id : 1,
		title : "gggg",
		content : "eeerrryyyyyyy"
		}
	var b = [1,4,6,78]
	res.json([a,b])
})


app.listen(5566, function(err) {
  console.log('Listening on port 5566');
});


