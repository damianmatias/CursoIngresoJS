/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;
	var suma;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	suma=parseInt(uno)+parseInt(dos);
	alert("la suma es : "+suma);





}

function restar()
{
	var uno;
	var dos;
	var resta;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	resta=parseInt(uno)-parseInt(dos);

	alert("la resta es : " +resta);



}

function multiplicar()
{ 
	var uno;
	var dos;
	var por;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	por=parseInt(uno)*parseInt(dos);

	alert("la multiplicacion : " +por);
}

function dividir()
{
	var uno;
	var dos;
	var dividir;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	dividir=parseInt(uno)/parseInt(dos);

	alert("la division es : " +dividir);
}

