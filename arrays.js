//Arays son listas ordenadas de elementos, que pueden ser diferentes datos cómo string, number, booleano, otro 
//array, etc

let array = ['nicole', true, 'matias', 28, ['desarrollador']];

console.log(array)
console.log(array[2])

let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log(dias)
console.log(dias.length)


//METODOS DE ARRAY
//agrega un elemento al final
array.push('feriado')
//elimina el ultimo elemento del array
array.pop()
//agrega un elemento al inicio del array
array.unshift('juega river')
//elimina el primer elemento del array
array.shift()
//devuelve el indice o posicion que se le indique por parametro
array.indexOf('lunes')
//invierte el orden del array
array.reverse()
//agrega por parametro los elementos que deseamos concatenar
array.concat(['miercolesLoco'])
//devuelve un booleano dependiendo si el elemento se encuentra en el array o no
array.includes('miercoles')
//devuelve los elementos pero se agrega un separador especificado por parametro
array.join('-');
//ordena el array alfabeticamente
array.sort()
// NECESITA POR LO MENOS 3 PARAMETROS, LA PRIMERA DESDE QUE POSICI
//ON CORTA, LA SEGUNDA CUANTOS ELEMENTO REEMPLAZA Y EL TERCER PARAMETRO
//QUE ELEMENTO AGREGA
array.splice(1,2,'martesito')


// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre
//  cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.



// let texto = prompt('introduce un texto');
// let array = texto.split('')

// console.log(array.join('-'));
// console.log(array.reverse())


