window.addEventListener("load", gestionarEventos, false);

function gestionarEventos() {
    var seleccion = document.getElementById("juego");
	seleccion.selectedIndex=-1; //Para que no apareza ningún elemento del campo select marcado
    seleccion.addEventListener("click", generar, false);
}


/**
	Función principal que analiza el juego que se ha seleccionado en el campo select
	y el número introducido en el campo numérico para generar las combinaciones necesarias
*/
function generar() {
	var numCombinaciones = document.getElementById("numApuestas").value; //Se obtiene el valor del campo numérico
	var opcion_juego = document.getElementById("juego")
	
	var index_juego = opcion_juego.selectedIndex; //Se obtiene el indice de la opción seleccionada
	var juego = opcion_juego[index_juego].text //Se obtiene el nombre de la opción seleccionada
	var numeros=[]	//Array que almacena los numeros del juego
	
	var numAdicional=[] //Array que almacena los numeros especiales del juego
	var mensaje_salida = "" //Variable que almacena el mensaje de salida
    var color=" ";
	var estrella=" ";
	
	for(var i=0; i<numCombinaciones; i++){ //Bucle que genera tantas combinaciones como el usuario haya seleccionado
		switch(index_juego){	//
			case 0:
				numeros = getRandomNumbers(6, 1, 49)
				numAdicional = getRandomNumbers(1, 0, 9)			
				break;
	
			case 1:
				numeros = getRandomNumbers(5, 1, 54)
				
				numAdicional = getRandomNumbers(1, 0, 9)
				break;
		
			case 2:
				numeros = getRandomNumbers(5, 1, 50)
				
				numAdicional = getRandomNumbers(2, 1, 12)
				break;	
		
			case 3:
				numeros = getRandomNumbers(6, 1, 49)
				
				break;	
			
			default:
				break;
		}
	
	//Se crea el mensaje de salida
	mensaje_salida += "<h3>Combinación "+(i+1)+":</h3>"	
	mensaje_salida += darFormato(numeros);
	mensaje_salida += "&nbsp|&nbsp" + darFormatoEstrella(numAdicional)+"<br>"
	
	
	
	
	}
	
	mensaje_salida = "<h2>Los números obtenidos para " + juego + " es: </h2>" + mensaje_salida	
	document.getElementById("solucion").innerHTML = mensaje_salida //Se muestra el mensaje de salida en el html
	// document.getElementById("solucion").innerHTML=color+" "+estrella;
	
	
}

/**
	Función que permite obtener un array de números aleatorio únicos
	N es el tamaño del Array
	n1 es el valor mínimo del rango
	n2 es el valor máximo del rango
*/
function getRandomNumbers(N, n1, n2){
	var listaNum= new Array()
	while(listaNum.length<N){
		var num = Math.floor(Math.random()*n2+n1)
		if(!listaNum.includes(num)){
			listaNum.push(num)
		}
	}
	return (listaNum.sort(function(a, b){return a - b}))
}

 

	