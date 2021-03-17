// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var primero = array[0];
  return primero;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var l = array.length-1;
  return array[l];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var l = array.length;
  return l;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
    for(var i = 0; i < array.length; i++ ){
      var current = array[i];
      current += 1;
      nuevoArray.push(current);
  
    }
    return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var nuevoArray = array;
  nuevoArray.push(elemento) ;
  return nuevoArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var nuevoArray = array;
  nuevoArray.unshift(elemento) ;
  return nuevoArray;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(" ");
    return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var arreglo = array;
    var existe = false;
    for(var i = 0; i <= arreglo.length; i++){
        var current = arreglo[i];
        if(current === elemento){
            existe = true;
        }
    }
    return existe;

}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
    for(var i = 0; i < numeros.length; i++){
        var current = numeros[i];
        suma += current;

    }

    return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var l = resultadosTest.length;
    var suma = 0;
    var promedio = 0;
    for(var i = 0; i < l ; i++){
        var current = resultadosTest[i];
        suma += current;
    }
    
    promedio = suma / l;

    return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numbers = numeros;
    numbers.sort(function(a, b) {
    return a - b;
    });

    var l = numbers.length - 1;
    var masgrande = numbers[l];
    return masgrande;
  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    var l = arguments.length;
    var mult = 1;
    for(var i = 0; i < l ; i++){
        var current = arguments[i];
        mult = mult * current;
        
    }
    return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var miArreglo = arreglo;
    var l = arreglo.length;
    var cuenta = 0;
    for(i = 0 ; i < l; i++){
        var current = miArreglo[i];
        if(current > 19){
            cuenta += 1;
        }
    }

    return cuenta;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia > 1 && numeroDeDia < 7){
        return "Es dia Laboral";
    }else{
        return "Es fin de semana";
    }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var string = n.toString();
    var array = [];
    for(var i = 0 ;i < string.length; i++){
        array.push(string[i]);
        
    }

    if(array[0] == 9){
        return true;
    }else{
        return false;
    }
    
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var counter = 0;
  var l = arreglo.length;

  for(var i = 0; i < l; i++){
      var base = arreglo[0];
      var current = arreglo[i];
      if(base == current){
          counter += 1;
      }
      //console.log(i , current, counter);
  }
  
  if(counter < 4){
      return false;
  }else{
      return true;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var analizar = array;
  var mesesBuscados = [];
  for(var i = 0; i < analizar.length; i++){
      var current = analizar[i];
      if(current == "Enero" || current == "Marzo" || current == "Noviembre"){
          mesesBuscados.push(current);
      }
  }
  
  if(mesesBuscados.length < 3){
      return "No se encontraron los meses pedidos";
  }else{
      return mesesBuscados;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var enteros = array;
    var nuevoArray = [];

    for(var i = 0 ; i < enteros.length; i++){
        var current = enteros[i];
        if(current > 100 && current <= 200){
            nuevoArray.push(current);
        }
    }

    return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

    var i = 0;
    var suma = numero;
    var arreglo = [];
    var res ;
    while( i < 10 ){
        //console.log(suma +"iteracion" + i)
        if( suma == i){
            //console.log(suma + "interrumpio en " + i);
            res = "Se interrumpió la ejecución";
            break;
        }
            
        suma += 2;
        arreglo.push(suma);
        res = arreglo;
        i ++;
        //console.log(suma)
    }

    return res;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i = 0;
    var suma = numero;
    var arreglo = [];
    var res ;
    while( i < 10 ){
        
        if( suma == 5){
            continue;
        }
        suma += 2;
        arreglo.push(suma);
        res = arreglo;
        i ++;
        //console.log(suma)
    }

    return res ;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
