function ejecuta(cad){
		abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		llave="cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ab";
			salida="";
			salida1="";
			cont=0;
			cont1=0;
			while(cont<cad.length){
				letra=cad.charAt(cont);
				pos=abc.indexOf(letra);
				salida=salida+llave.charAt(pos);
				cont++;
		}
		return(salida);
}