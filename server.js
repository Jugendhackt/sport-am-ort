var express = require('express')
var app = express()

app.get('/',function(req,res){
	
	//res.send("Hallowelt")
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/index.html')
	
	
});
app.get('/index.js',function(req,res){
		res.setHeader('contentType','application/javascript');

		res.sendFile(__dirname +'/index.js')
	
	
});
app.get('/einloggen',function(req,res){
	
	res.send("Willkommen!")
	
	
});

app.listen(8080);
