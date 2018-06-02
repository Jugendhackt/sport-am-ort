var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)


io.sockets.on('connection', function(socket,username){
	socket.on('neuerClient',function(username){ 
       socket.username = username
	   
	socket.broadcast.emit('neuerClient', username)
	})
	socket.on('neueNachricht',function(nachricht){
		
		socket.broadcast.emit('neueNachricht',{username:socket.username , nachricht:nachricht})
		
	})
	
	
		
})

app.get('/',function(req,res){
	
	//res.send("Hallowelt")	
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/index.html')
	
	
});
app.get('/index.js',function(req,res){
		res.setHeader('contentType','application/javascript');

		res.sendFile(__dirname +'/index.js')
	
	
});
app.get('/Bilder/symbol_brief.gif',function(req,res){
		res.setHeader('contentType','image/png');

		res.sendFile(__dirname +'/Bilder/symbol_brief.gif')
	
	
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
app.get('/Nachrichten.html',function(req,res){
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/Nachrichten.html')
		
	
});
app.get('/chatseite.html',function(req,res){
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/chatseite.html')
		
	
});
app.get('/Startseite.html',function(req,res){
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/Startseite.html')
		
	
});
app.get('/Freunde_finden.html',function(req,res){
	res.setHeader('contentType','html');
	res.sendFile(__dirname +'/Freunde_finden.html')
		
	
});

app.listen(8080);
