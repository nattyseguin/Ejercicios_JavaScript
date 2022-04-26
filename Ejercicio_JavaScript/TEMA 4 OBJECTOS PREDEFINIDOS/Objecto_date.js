/*EJERCICIOS
 Haz un programa que diga sabiendo el día en que naciste nos 
diga en qué día de la semana (lunes, martes,
...) caerá tu próximo cumpleaños.
 Completa el ejercicio anterior para que pueda decir el día del próximo 
cumpleaños de cualquier fecha de
nacimiento introducida por teclado con el formato dd-mm-aaaa
*/

var cumple =prompt("introduce fecha de cumpleaños.Formato dd-mm-aaaa");
var meses =[31,29,31,30,31,30,31,31,30,31,30,31];
var max=0;  
var error=0;
var fecha=new Date();
var salida;
var comprobar=cumple.split("-");


var anho=parseInt(comprobar[2]);
var dia=parseInt(comprobar[0]);
var indiceMes=parseInt(comprobar[1]);



var anhoActual=fecha.getFullYear();





if(comprobar.length==3){
	alert("el formato de guiones es correcto esta correcto");
	
		
		if(comprobar[0].length==2 && dia>=1 && dia<=meses[indiceMes-1]){//COMPROBAR DIAS 
			if(comprobar[1].length==2 && indiceMes>=1 && indiceMes<=12 ){//COMPROBAR MESES
				if(comprobar[2].length==4){//COMPROBAR AÑOS
	
					if (meses[indiceMes-1]==29) { //comprobamos que el mes sea febrero
					
						if ((anho % 4 == 0 ) || (anho % 100 == 0) || (anho % 400 == 0)) {
							alert("año  bisisesto\n"+"EL SIGUIENTE CUMPLE SERA "+siguienteCumple());
						
						}else if (dia==29) {
							alert("el dia introducido es incorrecto porque el año es bisisesto");
							}else{
							
							alert("año no bisisesto\n"+"EL SIGUIENTE CUMPLE SERA "+siguienteCumple());
						
					   
							}
						
						}else{//SI NO ES FEBRERO
							alert("EL SIGUIENTE CUMPLE SERA "+siguienteCumple());
						}
					
					
				}else{
					alert("error de formato del año  o el año es incorrecto");
				}
			}else{
				alert("error de formato del mes o el mes es incorrecto");
			}
			
		}else{
			alert("error, el formato del dia o el dia es incorrecto");
			
		}
	
}else{
	alert("formato incorrecto");
	
}




function siguienteCumple(){
	if((fecha.getMonth()>indiceMes-1) || (fecha.getDate()>=dia && fecha.getMonth()==indiceMes-1 )){
		fecha.setFullYear(anhoActual+1,indiceMes-1,dia);
	}else{
		fecha.setFullYear(anhoActual,indiceMes-1,dia);
	}
	return fecha;
}





