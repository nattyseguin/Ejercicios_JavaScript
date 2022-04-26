	/*//EJERCICIO 1
	
	function crearVentana() {
		var nuevaVentana =
		window.open("","","toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,height=100,width=800,left=100,top=100");
//comprobamos que existe la ventana
//ya que pueden estar bloqueados los elementos emergentes
	if (nuevaVentana) {

// cabecera del documento html de la ventana creada
		nuevaVentana.document.write("<!DOCTYPE html>\n");
		nuevaVentana.document.write("<html>\n");
		nuevaVentana.document.write(" <head>\n");
		nuevaVentana.document.write(" <meta http-equiv=\"Content-Type\"content=\"text/html;charset=utf-8\">\n");
		nuevaVentana.document.write(" <title>Ejercicio 1. Nueva ventana</title>\n");
		nuevaVentana.document.write(" </head>\n");
// cuerpo del documento
		nuevaVentana.document.write(" <body>\n");
		nuevaVentana.document.write(" <div>\n");
// propiedades configurables de la ventana creada con el método open
		nuevaVentana.document.write(" toolbar=yes<br />\n");
		nuevaVentana.document.write(" location=yes<br />\n");
		nuevaVentana.document.write(" directories=yes<br />\n");
		nuevaVentana.document.write(" status=yes<br />\n");
		nuevaVentana.document.write(" menubar=yes<br />\n");
		nuevaVentana.document.write(" scrollbars=yes<br />\n");
		nuevaVentana.document.write(" resizable=yes<br />\n");
		nuevaVentana.document.write(" height=400<br />\n");
		nuevaVentana.document.write(" width=800<br />\n");
		nuevaVentana.document.write(" left=100<br />\n");
		nuevaVentana.document.write(" top=100<br />\n");
		nuevaVentana.document.write(" </div>\n");
		nuevaVentana.document.write(" </body>\n");
		nuevaVentana.document.write("</html>");
	} else {
		alert("Revisa si tienes bloqueados los pop-ups o ventanas emergentes");
	}
}



//EJERCICIO 2
function crearNueva(direccion) {//direccion contiene la URL que se abrirá en la ventana creada
return window.open(direccion,"","height=400,width=800");
}
function cerrarNueva(ventana) {
if (ventana) {//nuevaVentana es una variable global
ventana.close();
}
}
var nuevaVentana;
var direccion="http://www.google.es";
alert("Vamos a crear una nueva ventana con la dirección de google");
nuevaVentana=crearNueva(direccion);
alert("¿Has visto ya la ventana? \nAhora vamos a abrir otra con la dirección del tiempo, así que mueve antes la anterior a otra zona de la pantalla");
direccion="http://www.eltiempo.es";
var otraVentana=crearNueva(direccion);
alert("Ahora tenemos tres ventanas abiertas: \n1. La que está ejecutando el script\n2. La de la página de google\n3. La que nos muestra el tiempo\n\nAhora vamos a llamar al método de cerrar la ventana"); //alert(“Todo en la misma línea”)
cerrarNueva(nuevaVentana);
alert("¿Cuál de ellas se cerró?\n\nLlamamos de nuevo al método cerrarNueva");
cerrarNueva(otraVentana);
*/

/*EJERCICIOS (del boletín).
Escribe el código de los archivos necesarios (html y js) para realizar un programa que solicite la entrada de un
nombre (con un prompt) y muestre el resultado de la ejecución con un único alert:
I. Introducir un nombre completo por teclado con el formato: apellidos, nombre
El programa debe avisar del posible error encontrado:
a. Se dejó en blanco el nombre o los apellidos
b. No hay la coma de separación o a hay más de una.
II. Depurar la escritura del nombre (eliminando espacios sobrantes a la izquierda, derecha y por el medio).
Antes de la coma no debe haber blanco y después de la coma debe haber un espacio.
III. Visualizar el nombre antes y después de la depuración.
IV. Visualizar un saludo personalizado por pantalla (Ejemplo: Hola José, para el nombre Pérez López, José Luis).
V. Visualizar la longitud del nombre completo ya depurado (la coma no se tiene en cuenta).
VI. Visualizar el nombre depurado en minúsculas.
VII. Visualizar el nombre depurado en mayúsculas.
VIII. Visualizar la longitud del nombre propio ya depurado.
IX. Visualizar la longitud de sus apellidos ya depurados.
X. Visualizar las iniciales seguidas de punto.
Primero las iniciales del nombre y después las de los apellidos.
XI. Encriptar el nombre y sus apellidos depurados con un * por cada carácter.
La coma no se encripta ni se pone.
Los espacios en blanco no se encriptan pero se ponen.
Visualizar el resultado de la encriptación.
XII. Visualizar si el conjunto de sus iniciales (del apartado X) forman una palabra palíndroma.
Si se lee de la misma forma de izquierda a derecha que de derecha a izquierda.
No se tienen en cuenta los puntos que siguen a cada inicial.
*/
/*mi codigo
if(nombreApel.indexOf(",")>-1){
	for(var i=0; i<nombreApel.length;i++){
		coma=nombreApel.charAt(i);
		if(coma==','){
			cont++;
		}
	}	
	
if (cont>1){
	alert("hay mas de una coma.Introduzca solo una");
}	else{
	alert("esta todo correcto");
}
	
}else{
alert("te falta una comilla o tienes de mas");
}
*/

//VARIABLES GLOBALES
var nombreApel=prompt("introduce apellidos y nombre");
var posComilla=nombreApel.indexOf(",");
var incorrecto=0;
var coma=" ";
var cont=0;
var inicialesNombre=" ";
var inicialesApellido=" ";
var encriptado=" ";



                             
if(nombreApel.indexOf(",")>-1){// el dato contiene al menos una coma
	if(nombreApel.indexOf(",")==nombreApel.lastIndexOf(",")){//miramos si la primera coma es igual a la ultina posicion de la coma; ejmplo . si tengo la coma en la posicion 4 y no hay mas comas, la ultima posicuin de mi coma es igual a 4.
		var nombre=nombreApel.slice(nombreApel.indexOf(",")+1, nombreApel.length).trim();//ponemos trim para quitar espacios, para que al comprobar si hay datos , no lea los espacios como un dato mas
		var apellido=nombreApel.slice(0,nombreApel.indexOf(",")).trim();
		alert(nombre+"-"+apellido);
		
		
	
	
		if((apellido!=null )||(nombre!=null)){//comprobamos si tiene algundato las cosas
		alert("todo esta completo");
		nombreApel=nombreApel.trim();// esto es para quitarle los espacios en blanco sobrantes solo por delante y por detras
		
		//vamos a quitar los espacios del medio, pasamos el string a array .
		var arrApel=apellido.split(" ");
		var arrNom=nombre.split(" ");
		var nombreCompleto=" ";
		var apellidoCompleto=" ";
		
		nombreCompleto=quitarEspacios(arrNom).trim();
		apellidoCompleto=quitarEspacios(arrApel).trim();
		var nombreApelDepurado=apellidoCompleto+","+nombreCompleto;//guardamos nombre y apellidos depurado
		
		alert("nombre y apellidos sin espacio"+nombreApelDepurado);

		alert("HOLI "+nombreCompleto.substring(0,nombreCompleto.indexOf(" "))); 
		alert("tamaño nombre y apellidos depurados: "+nombreApelDepurado.length);//tamaño nombre completo ya depurado
		
		alert("en minuscula: "+nombreApelDepurado.toLowerCase());// convertir texto en minuscula
		alert("en mayuscula:  "+nombreApelDepurado.toUpperCase());//convertir texto en mayuscula
		
		
	
		alert("tamaño nombre depurado: "+nombreCompleto.length);//mostrar tamaño string nombre depurado
		alert("tamaño apellidos depurado: "+apellidoCompleto.length);//apellidos depurados
		
		//PONER INICIALES DEL NOMBRE Y APELLIDOS
		
		var segundoNombre=nombreCompleto.split(" ");
		inicialesCompletas=comprobarIniciales(segundoNombre,nombreCompleto,apellidoCompleto);
		alert(inicialesCompletas);
		
		//ENCRIPTAR NOMBRE Y APELLIDOS
		encriptado=encriptarNombreApel(nombreCompleto)+encriptarNombreApel(apellidoCompleto);
		alert(encriptado);
		
		//PALINDROMA
			if(palindromo(inicialesCompletas)==1){
				alert("las iniciales son palindromas");
			}else{
				alert("las iniciales no son palindromas");
			}
		
		}else{
			alert("error, falta un dato por rellenar");
		}
	}else{
		alert("estas repitiendo comillas");
	}
}
	
else{
	alert("el nombre no esta dividido en comillas");
}


//FUNCIONES
function  quitarEspacios(array1) { 
var completo=" ";

for(var i=0;i<array1.length;i++){
			if(array1[i]!=""){ //para comprobar que ese indice no lleva espacios
				completo=completo+array1[i]+" ";
				
			}
			
		}

return completo;

}


function comprobarIniciales(segundo,nome,apel){
var inicialesN=" ";
var inicialesA=" ";
var inicialesC=" ";

if(segundo[1]!=undefined){
		inicialesN=nome.toUpperCase().charAt(0)+"."+nome.toUpperCase().slice(nome.indexOf(" ")+1,nome.indexOf(" ")+2 );
		inicialesA=apel.toUpperCase().charAt(0)+"."+apel.toUpperCase().slice(apel.indexOf(" ")+1,apel.indexOf(" ")+2 );
		
		
		}else{
			inicialesN=nome.toUpperCase().charAt(0);
			inicialesA=apel.toUpperCase().charAt(0)+"."+apel.toUpperCase().slice(apel.indexOf(" ")+1,apel.indexOf(" ")+2 );
		}
		
		inicialesC=inicialesN+"."+inicialesA;
		
		return inicialesC;
		
}
function encriptarNombreApel(string){
var salida=" ";
	for(var i=0;i<string.length;i++){
			
			if(string[i]==" "){
				salida=salida+" ";
			}
			salida=salida+"*";
		}
return salida;
}

function palindromo(string) {
  var comprobar= string.split("").reverse().join(""); // JOIN:une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
  var salida=0;
	if(string==comprobar){
	salida=1;
	}
  return salida;
}