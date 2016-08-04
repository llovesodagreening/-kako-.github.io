var express = require('express');
var fs = require('fs');
var calc = require('./calc.js');
var app = express();
var request = require('request');

request('http://localhost:5566/haha',function(err,response,body){
	body = JSON.parse(body);
	console.log(body[0].title);
	console.log(body);
});