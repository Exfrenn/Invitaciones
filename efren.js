function show(){
	document.sign_in.s_psw.type="text";
}

function hide(){
	document.sign_in.s_psw.type="password";
}

function nada(){
	alert("hola");
	/*
	intentos=parseInt(document.sign_in.intentos.value);
	j_acc=document.sign_in.s_acc.value;
	j_psw=document.sign_in.s_psw.value;
	if (j_acc.length==0) {
		alert("Please insert your account");
		document.sign_in.s_acc.style.background = "red";
	} 
	else{
		if (j_psw.length==0){
			alert("Please insert your password");
			document.sign_in.s_psw.style.background = "red";
		}

		else{
			intentos++;
			document.sign_in.intentos.value=intentos;	
			if ((j_acc=="lakers@gmail.com")&& (j_psw=="LeBron")){
				alert("Acceso permitido");
			}
			else{
				alert("Acceso denegado");
				if (intentos==3){
					alert("se han agotado los intentos");
					document.sign_in.s_acc.disabled="true";
					document.sign_in.s_acc.style.background="gray";
					document.sign_in.s_psw.disabled="true";
					document.sign_in.s_psw.style.background="gray";
				} // if de intentos
			} // if de la cuenta y contraseña		
		} // if longitud del password
	} // if de la longitud de la cuenta */
}//termina la funcion
