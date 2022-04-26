/*Haz una función que permita generar una lista de N números enteros aleatorios distintos
 comprendidos
entre 2 números concretos.
 Haz un programa que pida el tipo de juego al que quieres jugar (Euromillón, Primitiva, Bonoloto, El
Gordo), haciendo uso de la función anterior, muestre con un alert la combinación que juegas 
(ordenada).
En cada juego varían la cantidad de números a seleccionar, así como el rango de números.
Algunos tienen números adicionales (estrellas).
La función pedida tiene que valer para todos ellos.
Primitiva- 6 números [1,49] + 1 reintegro [0,9]
El Gordo- 5 números [1,54] + 1 reintegro [0,9]
Euromillón- 5 números [1,50] + 2 estrellas [1,12]
Bonoloto- 6 números [1,49] 

*/


var juego =parseInt(prompt("A que juego quieres jugar\n" +
				   "1.Primitiva\n"+
				   "2.El Gordo\n"+
				   "3.Euromillón\n"+
				   "4.Bonoloto\n"));



switch (juego){
	

	case 1:
		var numero =parseInt(prompt("cuantos numeros quieres"));
		alert("los numeros de la primitiva son "+generarAleatorio(1,49,numero)+"\n"
			 +"El reintegro es :"+generarAleatorio(0,9,1));
		

	break;
	
	case 2:
		var numero =parseInt(prompt("cuantos numeros quieres"));
		alert("los numeros de la primitiva son "+generarAleatorio(1,54,numero)+"\n"
			 +"El reintegro es :"+generarAleatorio(0,9,1));
		

	break;
	
	case 3:
		var numero =parseInt(prompt("cuantos numeros quieres"));
		alert("los numeros de la primitiva son "+generarAleatorio(1,50,numero)+"\n"
			 +"Las estrellas son es :"+generarAleatorio(0,9,2));
		

	break;
	
	case 4:
		var numero =parseInt(prompt("cuantos numeros quieres"));
		alert("los numeros de la primitiva son "+generarAleatorio(1,49,numero)+"\n");
			
		

	break;
	
	
	default:
		alert("La opción seleccionada no se encuentra disponible")
	break;

}

function generarAleatorio(num1,num2,num){
	
	/*var max;
	var min;
	
	if(num1>num2){
		max=num1;
		min=num2;
	}else{
		max=num2;
		min=num1;
	}*/
	var salida=" ";
	
	for(var i=0;i<num;i++){
		
		  salida+=Math.floor(Math.random() * (num2 - num1 + 1) ) + num1+",";
	}
	
	
	return salida;
	
}


