function show(){
	document.sign_in.s_psw.type="text";
}

function hide(){
	document.sign_in.s_psw.type="password";
}

function nada(){
	alert("hola");
	intentos=parseInt(document.sign_in.intentos);
	s_acc=document.sign_in.s_acc.value;
	s_psw=document.sign_in.s_psw.value;
	j_acc=ejecuta(s_acc);
	j_psw=ejecuta(s_psw);
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
			encriptado=document.sign_in.encriptado.value;
			encriptado1=document.sign_in.encriptado1.value;
			if ((j_acc=="OcAtc")&& (j_psw=="Godclcfqtc")){
				alert("Acceso permitido, hola embajadora");
				window.open("invitacion_embajaja.html");
			}else if ((j_acc=="Cdtkn")&& (j_psw=="VqecAc")){
				alert("Acceso permitido, hola Tocaya");
				window.open("invitacion_ab.html");
			}else if ((j_acc=="Ugdcuvkcp")&& (j_psw=="EjgxA")){
				alert("Acceso permitido, Bonjour Chevy");
				window.open("invitacion_se.html");
			}else if ((j_acc=="0gjqujwc")&& (j_psw=="0glqlwc")){
				alert("Acceso permitido, Bonjour Yujuju");
				window.open("invitacion_yh.html");
			}else if ((j_acc=="Fkgiq")&& (j_psw=="Rclkp")){
				alert("Acceso permitido, Hola Pajin");
				window.open("invitacion_pj.html");
			}else if ((j_acc=="Okiwgn")&& (j_psw=="Okmg")){
				alert("Acceso permitido, Hola Mike");
				window.open("invitacion_mk.html");
			}else if ((j_acc=="Mctqn")&& (j_psw=="Jgtokqpg")){
				alert("Acceso permitido, Hola Karol");
				window.open("invitacion_karol.html");
			}else if ((j_acc=="Fcokcp")&& (j_psw=="Gokpgo")){
				alert("Acceso permitido, Hola Damian");
				window.open("invitacion_damian.html");
			}else{
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
	} // if de la longitud de la cuenta
}//termina la funcion
