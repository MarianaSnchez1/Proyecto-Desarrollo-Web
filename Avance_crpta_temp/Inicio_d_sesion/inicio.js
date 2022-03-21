function getEmail(){
	return document.getElementById("mail").value;
}


function getPasswd(){
	return document.getElementById("passwd").value;
}




function mostron(){
	var a = getEmail();
	var b = getPasswd();
	window.alert(`ur e-mell iz: ${a} & ur passwd iz: ${b}`);
}

