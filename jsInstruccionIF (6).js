function Mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad>17) 
	{
		alert("esta persona es mayor de edad");
	}
	if (edad>13 && edad<18)
	 {
	 	
			alert("es adolescente");
	 }else{
	 	
	 		alert("es menor de edad");
	 }


}//FIN DE LA FUNCIÓN