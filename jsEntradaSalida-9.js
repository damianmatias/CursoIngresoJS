/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe;
	var aumento;
	var resultado;
	
	/*importe=parseInt(importe);
	aumento=parseInt(aumento);
	resultado=parseInt(resultado);*/


	importe=document.getElementById('sueldo').value;
	
	aumento=parseInt(importe)*10/100;
	
	resultado=parseInt(importe)+parseInt(aumento);
	
	document.getElementById('resultado').value=resultado;

	console.log(aumento);
}
