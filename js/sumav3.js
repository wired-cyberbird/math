// formulario donde ingresan los numeros utilizados para la operacion
var data1 = document.getElementById('numero1');
var data2 = document.getElementById('numero2');
// espacio donde se muestra la informacion
var output1 = document.getElementById('digito1');
var output2 = document.getElementById('digito2');
// + 1
var add = document.getElementById('sobras');
// boton que desencadena la suma
var activar = document.getElementById('accionar');
function sumar(){
	// extraer la informacion de los campos del formulario
	var content1 = data1.value;
	var content2 = data2.value;
	// datos para mostrar
	var num1 = data1.value;
	var num2 = data2.value;
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
		var diferencia = content1.length - content2.length;
		diferencia = content1.length - diferencia;
		console.log('diferencia1 = ' + diferencia);
		var max = content1.length;
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
		var diferencia = content2.length - content1.length;
		diferencia = content2.length - diferencia;
		console.log('diferencia2 = ' + diferencia);
		var max = content2.length;
	}else{
		//console.log('son iguales');
		// desplegar los valores en el tablero
		output1.innerHTML = content1;
		output2.innerHTML = content2;
		var max = content1.length;
	}
	// convertir los valores en string a numeros
	var numero1 = new Number(content1);
	var numero2 = new Number(content2);
	// efectua la operacion de suma
	var resultado = numero1 + numero2;
	// espacio donde ira la respuesta
	var suma = document.getElementById('respuesta');
	// despliega el resultado de la operacion
	suma.innerHTML = resultado;
	// string -> array
	// turn the values of the arrays into strings
	var arr1 = data1.value;
	var arr2 = data2.value;
	var turned_into_array1 = arr1.split('').map(Number);
	var turned_into_array2 = arr2.split('').map(Number);
	var cindex1 = arr1.length - 1;
	var cindex2 = arr2.length - 1;
	//console.log(turned_into_array1[1]);
	//console.log(content1.length);
	function extra(diferencia, max){
		console.log("extra");
		for(var i = 0; i < diferencia; i++){	

			var currentindex = turned_into_array1[cindex1];
			console.log(currentindex);
			console.log(turned_into_array1);
			console.log(turned_into_array1.indexOf(currentindex));
			var indice = turned_into_array1.indexOf(currentindex);


			var suma = turned_into_array1[cindex1] + turned_into_array2[cindex2];
			console.log(suma);
			
			if(suma > 9){
				var extra = new Array();
				extra.length = arr1.length;
				extra.fill("&nbsp;&nbsp;");
				extra[indice] = 1;
				add.innerHTML = extra.join('');
				console.log(' + 9');
				console.log(extra);
			}

				turned_into_array1[(cindex1--)];
				turned_into_array2[(cindex2--)];

				console.log("+");
		}
	}
	extra(diferencia);
	// vaciar los campos del formulario
	data1.value = "";
	data2.value = "";	
}
// agregar un evento al boton del formulario
activar.addEventListener("click", sumar);
