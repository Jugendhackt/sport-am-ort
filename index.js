function einloggen(){
var username = document.getElementById("username").value;
var passwort = document.getElementById("passwort").value;
var params = {
		
		url:'http://localHost:8080/function/einloggen?username='+ username + '&passwort='+ passwort,
		success:function(result){
			
			location.href = 'http://localHost:8080/Startseite.html'
			
		},
		error:	function(result){ alert('Falsche Eingaben') }

		
		
	}
jQuery.ajax(params);
	
	
}