
window.addEventListener("load", gestionarEventos, false);
// Array con las letras del alfabeto para usar en la codificación numérica
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
//Array con los tipos de codificación para el elemento Select
var tiposCodificacion = ["Texto al revés","Codificación Numérica"]
var estiloBotonAzul="  ";

function gestionarEventos(){
	document.getElementById("iniciar").addEventListener("click", crearPagina, false);
}

function crearPagina(){
	document.getElementById("zonaTextoOriginal").removeAttribute("hidden")// mostramos la zona
	var mostrarZona=document.getElementById("zonaTextoOriginal")
	var textoArea=document.createElement("textarea"); //CREAMOS EL AREA
	var elementosSelec=document.createElement("select"); //CREAMOS ELEMENTO SELECT
	
	var botonCodificar=document.createElement("input");  //CREAMOS boton codificar
	var botonCancelar=document.createElement("input");  //CREAMOS boton cancelar
	
	
	
	botonCodificar.value="CODIFICAR" //añadimos el texto a los botones
	
	botonCancelar.value="CANCELAR"
	botonCancelar.id="CANCELAR"//añadimos un id al boton cancelar
	
	
	botonCodificar.setAttribute("type", "button"); //type="button"
	botonCancelar.setAttribute("id", "CANCELAR"); //añadimos tipo input id="CANCELAR"
	
	
	 mostrarZona.appendChild(textoArea)//CREAMOS EL AREA
	 mostrarZona.appendChild(elementosSelec) //añadimos el select a la zona
	 elementosSelec.id="lista"
	
	
	
	 for(let i=0;i<tiposCodificacion.length;i++){ //creamos opciones del array para el elemeto select
		 var opciones=document.createElement("option")
		 opciones.text = tiposCodificacion[i];
		 elementosSelec.appendChild(opciones);
	 }
	 
	  mostrarZona.appendChild(botonCodificar);//añadimos los botones a la zona 
	  mostrarZona.appendChild(botonCancelar);//añadimos los botones a la zona 
	  
	  
	  
	  botonCodificar.addEventListener("click", aceptar, false);//creamos un evento para cada boton
	  botonCancelar.addEventListener("click", cancelar, false);
	
}


function aceptar(){
	var elArea=document.getElementsByTagName("textarea")[0] //obtenemos el area para coger su texto 
	var obtenerTexto=elArea.value; //texto del texarea
	var mayusculas=obtenerTexto.toUpperCase() //creamos una variable mayusculas para despues comprobar si esta el texto en mayusculas
	var letra=" ";
	
	if((obtenerTexto!="") &&(isNaN(obtenerTexto))&&(obtenerTexto==mayusculas)){//comprobaos que los datos introducidos son correctos
		
		
		var cogerLista=document.getElementsByTagName("select")[0]  //cogemos la zona de select
		var indice=cogerLista.selectedIndex
		
		document.getElementById("zonaResultado").removeAttribute("hidden") //hacemos que se muestre la zona zonaResultado
		   var zonaResul=document.getElementById("zonaResultado")
		   var resultadoCodi=document.createElement("p") //aqui creo estas etiquetas para meter el texto de cada codificacion
		   var resultadoNumeri=document.createElement("p")
		  
		
		if(indice==0){//COMPROBAMOS QUE ELEMENTO DEL indice Select ESTA COGIENDO para hacer una codificacion normal o numerica
		var codificar=codificacion(obtenerTexto); //texto codificado por letras
		   resultadoCodi.innerHTML=codificar;
		   zonaResul.appendChild(resultadoCodi)
		   grabar(codificar)
		 
		   
		   
		}else if(indice==1){// si el indice es uno es porque la codificacion es numerica
			var codNumerica=codificacionNumerica(obtenerTexto,alfabeto)
			resultadoNumeri.innerHTML=codNumerica
		    zonaResul.appendChild(resultadoNumeri)
			grabar(codNumerica)
			
			
		}
		
		
		
		var botonInicio=document.createElement("input");//creamos el boton inicio
		botonInicio.setAttribute("type", "button"); //añadimos tipo input type="button"
		
		botonInicio.value="INICIO"
        zonaResul.appendChild(botonInicio)
		botonInicio.addEventListener("click", inicio, false);//cuando haga click en el boton inicio
		 
		
		
	}else{
		alert("Has introducido el dato erroneo.Introduce un dato que no sea un numero y en mayusculas")
		elArea.value=" ";
	}
	
}




function cancelar(){ //CANCELAMOS
	var confirmar = confirm("¿Deseas cancelar la codificacion?")//Solicitamos confirmacion
	if(confirmar){
		document.getElementById("zonaResultado").setAttribute("hidden", ""); //OCULTAMOS LAZ ZONAS
		document.getElementById("zonaTextoOriginal").setAttribute("hidden", "");//OCULTAMOS LAZ ZONAS
		
		var elArea=document.getElementsByTagName("textarea")[0]
		var valor=elArea.text;
		var borrar=elArea.remove(valor);
		
	}
	
}

function inicio(){ //boton incio
	document.getElementById("zonaResultado").setAttribute("hidden", "");//OCULTAMOS LAZ ZONAS
	document.getElementById("zonaTextoOriginal").setAttribute("hidden", "");//OCULTAMOS LAZ ZONAS
		var elArea=document.getElementsByTagName("textarea")[0]
		var valor=elArea.text;
		var borrar=elArea.remove(valor);
}



//AQUI CODIFICO EL CODIGO PARA QUE SE PONGA AL REVES
function codificacion(string) {
  var reves= string.split("").reverse().join(""); //separamos el string por palabra y le damos la vuelta con 
													//reverse y las volvemos añadir con join al string
  
  return reves;
}



//AQUI CODIFICO NUMERICAMENTE
function codificacionNumerica(string,alfabet) { //codificamos cada palabra en numeros y los espacios le añado la foto

   var numeroAleatorio=Math.round(Math.random()*(6+4))//creamos numeros aleatorios
   var letra=" "
   var estilo = " "
 
	
 for(var i=0;i<string.length;i++){//recorremos el string letra a leta
			if(string[i]==" "){ //si hay un espacio añadimos la image
				estilo=  "<img src='emogi2.png' />" //añadimos la imagen 
				letra=letra+estilo;
			}else{
				for(var j=0;j<alfabet.length;j++){ //recorremos alfabeto para comprobar que letra se esta utilizando  
					if(alfabet[j]==string[i]){ //comprobamos en que indice se encuentra la letra del abecedario
						letra=letra+(j+numeroAleatorio)+" "; 
				}
				}
			
		  }
	 
   }
   return letra;	  
}
  
  
 //GRABAMOS LA CODIFICACION EN EL SESSIONSTORAGE
 function grabar(string){ 
var fecha= new Date(); //creamos el objecto fecha para obtener la fecha actual 

	 
	 if (typeof(Storage) !== "undefined") { //comprobamos si soporta alamacenamiento
			sessionStorage.setItem(fecha,string); //añadimos un sesion con clave fecha y la codificacio como valor 

			} else {
				alert(" No soporta el almacenamiento local ");
			}
		}
	 


  
