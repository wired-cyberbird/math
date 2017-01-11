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
	// copia de la informacion para plasmarse en el campo de vision
	var num1 = data1.value;
	var num2 = data2.value;
	// posicionamiento de los valores
	var longitud1 = new Number(content1.length);
	var longitud2 = new Number(content2.length);
	// evalua cual valor de los dos tienen mayor longitud
	if(content1.length > content2.length){
        //console.log(longitud1 - longitud2);
        /* Este ciclo agrega un espacio en blanco por cada digito
        del numero superior*/
        for (var i = longitud2; i < longitud1 ; i++) {
        	(function(){
        		num2 = '&nbsp;&nbsp;' + num2;
        	})();
        	// desplegar los valores en el tablero
			output1.innerHTML = content1;
			output2.innerHTML = num2;
		}
		var max = content1.length;
		var min = content2.length;
	}else if(content2.length > content1.length){
		//console.log(longitud2 - longitud1);
		/* Este ciclo agrega un espacio en blanco por cada digito
        del numero inferior*/
		for (var i = longitud1; i < longitud2 ; i++) {
        	(function(){
        		num1 = '&nbsp;&nbsp;' + num1;
        	})();
        	// desplegar los valores en el tablero
			output1.innerHTML = num1;
			output2.innerHTML = content2;
		}
		
		var max = content2.length;
		var min = content1.length;
	}else{
		// si los valores tienen la misma longitud no hay necesidad de acomodarlos
		//console.log('son iguales');
		// desplegar los valores en el tablero
		output1.innerHTML = content1;
		output2.innerHTML = content2;
		var max = content1.length;
		var min = content2.length;
	}
	//console.log(min);
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
	// saca otra copia de los valores 
	var arr1 = data1.value;
	var arr2 = data2.value;
	// convierte los strings en arrays, separa cada caracter como elemento y los convierte en numeros
	var turned_into_array1 = arr1.split('').map(Number);
	var turned_into_array2 = arr2.split('').map(Number);
	//console.log(turned_into_array1[1]);
	//console.log(content1.length);
	//Invierte los valores de los arrays
	var reverse1 = turned_into_array1.reverse();
	//console.log(reverse1);
	var reverse2 = turned_into_array2.reverse();
	//console.log(reverse2); 
	//Verifica si la suma vertical de los digitos es mayor a un digito
	function extra(){
		//console.log("extra");
		// crea un array que almacena los valores extra
		var extra = new Array();
		// asigna la longitud del valor mas corto
		extra.length = min;
		//console.log(extra);
		// suma los valores de derecha a izquierda
		for(var i = 0; i < min; i++){
			var suma = reverse1[i] + reverse2[i];
			//console.log(suma);
			// evalua si la suma es mayor a 9 entonces asigna que sobra 1 
			// en caso contrario asigna un espacio en blanco
			if(suma > 9){
				extra[i] = 1;
			}else if(suma < 9){
				extra[i] = '&nbsp;&nbsp;';
			}

		}
		//console.log(extra);
		extra.reverse();
		//console.log(extra);
		// despliega los valores en su espacio y agrega un espacio en blanco para ajustar el espacio
		add.innerHTML = '&nbsp;&nbsp;' + extra.join('');
	}
	extra();
	// vaciar los campos del formulario
	data1.value = "";
	data2.value = "";	
}
// dispara la funcion del programa mediante un click 
activar.addEventListener("click",function(){
	// limpia el area de sobrantes
	add.innerHTML = "";
	sumar();
});