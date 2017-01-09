// formulario donde ingresan los numeros utilizados para la operacion
var data1 = document.getElementById('numero1');
var data2 = document.getElementById('numero2');
// espacio donde se muestra la informacion
var output1 = document.getElementById('digito1');
var output2 = document.getElementById('digito2');
// boton que desencadena la suma
var activar = document.getElementById('accionar');
function sumar(){
	// extraer la informacion de los campos del formulario
	var content1 = data1.value;
	var content2 = data2.value;
	// datos para mostrar
	var num1 = data1.value;
	var num2 = data2.value;
	// string -> array
	//console.log(Array.isArray(content1));
	var arr1 = data1.value;
	var arr2 = data2.value;
	console.log(arr1[2]);
	function split_string(string, separator){
		splited_str = string.split(separator);
		console.log('The array has ' + splited_str.length + ' elements: ' + splited_str.join('/'));
		console.log(Array.isArray(splited_str));
	}
	var space = ",";
	split_string(arr1,space);
	// posicionamiento de los valores
	var longitud1 = new Number(content1.length);
	var longitud2 = new Number(content2.length);
	if(content1.length > content2.length){
        //console.log(longitud1 - longitud2);
        for (var i = longitud2; i < longitud1 ; i++) {
        	(function(){
        		num2 = '&nbsp;&nbsp;' + num2;
        	})();
        	// desplegar los valores en el tablero
			output1.innerHTML = content1;
			output2.innerHTML = num2;
		}
	}else if(content2.length > content1.length){
		//console.log(longitud2 - longitud1);
		for (var i = longitud1; i < longitud2 ; i++) {
        	(function(){
        		num1 = '&nbsp;&nbsp;' + num1;
        	})();
        	// desplegar los valores en el tablero
			output1.innerHTML = num1;
			output2.innerHTML = content2;
		}
	}else{
		//console.log('son iguales');
		// desplegar los valores en el tablero
		output1.innerHTML = content1;
		output2.innerHTML = content2;
	}
	// convertir los valores en string a numeros
	var numero1 = new Number(content1);
	var numero2 = new Number(content2);
	console.log(Array.isArray(numero1));
	// efectua la operacion de suma
	var resultado = numero1 + numero2;
	// espacio donde ira la respuesta
	var suma = document.getElementById('respuesta');
	// despliega el resultado de la operacion
	suma.innerHTML = resultado;
	// vaciar los campos del formulario
	data1.value = "";
	data2.value = "";
}
// agregar un evento al boton del formulario
activar.addEventListener("click", sumar);