function Mostrar()
{
//tomo la edad  
	var edad=0;
	var estadoCivil;
	var Soltero;
	//var Casado;
	//var Divorciado;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	console.log(estadoCivil);
	
	
	if (edad>17) 
	
		{if (estadoCivil=="Soltero") 
		
			{
				alert("Es soltero y no es menor.");

	
			}
		
		}

	


}//FIN DE LA FUNCIÓN