function Mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;

	edad=parseInt(edad);
	console.log(edad);
	if (edad<13 || edad>18)
	 {
	 	alert("no es adolescente");
	 }

}//FIN DE LA FUNCIÓN