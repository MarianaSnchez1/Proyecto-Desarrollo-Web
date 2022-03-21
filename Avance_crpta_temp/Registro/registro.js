function getPrenom(){
	return document.getElementById("prenom").value;
}

function getNom(){
	return document.getElementById("nom").value;
}

function getInstitucion(){
	return document.getElementById("institcion").value;
}


function getEmail(){
	return document.getElementById("mail").value;
}


function getPasswd(){
	return document.getElementById("passwd").value;
}

function getPasswd2(){
	return document.getElementById("passwd2").value;
}




function mostron(){
	var a = getPrenom();
	var b = getNom();
	var c = getInstitucion();
	var d = getEmail();
	var e = getPasswd();
	var f = getPasswd2();
	window.alert(`${a}, ${b}, ${c}, ${d} , ${e}, ${f}`);
}

