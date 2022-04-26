window.addEventListener("load",comprobarEvento, false);

function comprobarEvento(){
	var existe = document.getElementById("juego");
	 if (existe){ 
	 existe.addEventListener("click",generar,false);
	 }
}

function generar(){
	
	var numeroApuesta = document.getElementById("numApuestas");
	var opcionJuego = document.getElementById("juego");
	var indiceJuego= opcionJuego.selectedIndex;
	var numeros=[]	//Array que almacena los numeros del juego
	var numAdicional=[] //Array que almacena los numeros especiales del juego
	var mensaje_salida = "" //Variable que almacena el mensaje de salida
	for (var i=0;i<numeroApuesta;i++){
		
		switch(indiceJuego){
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
		
		
	}
	
}

//Se crea el mensaje de salida
	mensaje_salida += "<h3>Combinación "+(i+1)+":</h3>"	
	mensaje_salida += numeros
	mensaje_salida += "&nbsp|&nbsp" + numAdicional+"<br>"		
		
	}
	
	mensaje_salida = "<h2>Los números obtenidos para " + juego + " es: </h2>" + mensaje_salida	
	document.getElementById("solucion").innerHTML = mensaje_salida //Se muestra el mensaje de salida en el html
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
