function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var miNota;

	miNota=Math.floor((Math.random()*10)+1);
	console.log(miNota);
	if (miNota==9||miNota==10)
		 {
		 	alert("Con un "+miNota+" Excelente");

		 }
		 if(miNota<4)
		 	{
		 		alert("con un "+miNota+" Vamos la proxima se puede");
		 	}else{
		 		alert("Con un "+miNota+" Aprobo");
		 	}











}//FIN DE LA FUNCIÓN