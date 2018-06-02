function einloggen(){
var username = document.getElementById("username").value;
var passwort = document.getElementById("passwort").value;
var params = {
		
		url:'http://localHost:8080/function/einloggen?username='+ username + '&passwort='+ passwort,
		sucsess:function(result){alert("JAAA")}
		
	}
jQuery.ajax(params);
	
	
}