function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var Soltero;
	//var Casado;
	//var Divorciado;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value="Soltero";

	//console.log(Soltero);
	//console.log(Casado);
	//console.log(Divorciado);
	if (edad<19 ) 
	{if (estadoCivil!=Soltero) 
		{
			alert("Es muy pequeño para NO ser soltero");

	}
		
	}

}//FIN DE LA FUNCIÓN