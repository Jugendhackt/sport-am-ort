var express = require('express')
var app = express()
var io = require('socket.io').listen
var server = require('http').createServer(app)

//io.sockets.on('connection', function(socket,username){
//	socket.on('neuerClient',function(username){ 
//       socket.username = username
//
//	})
		
//})

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

app.get('/function/einloggen',function(req,res){
	var username = req.query.username;
	var passwort = req.query.passwort;
	
	if(username == 'sport' && passwort =='ort'){
		
		res.writeHead(200); 
		
         res.end("sucsess");
	}
	else{
		
		res.writeHead(403); 
         res.end("Fail");
		
	}
	
	
	
});


app.get('/Startseite.html',function(req,res){
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/Startseite.html')
		
	
});

app.listen(8080);
