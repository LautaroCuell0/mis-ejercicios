// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert 
// que diga “un mensaje”.

//alert('un mensaje');

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga 
// «Hello World» (document.write)

//document.write('Hello World');

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// document.write('resultado: 8')

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto 
// que diga «Hola nombreUsuario»

// let nombreUser = prompt('introduce tu nombre').toLocaleLowerCase();

// document.write(`hola que tal ${nombreUser}`)

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de 
//sumar estos dos números.

// let primerNum = parseInt(prompt('escribe un numero'));
// let segundoNum = parseInt(prompt('escribe un numero'));

// document.write(`la suma de los numeros ${primerNum} y ${segundoNum} es ${primerNum+segundoNum}`);

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


//  let primerNum = parseInt(prompt('escribe el primer numero'));
//  let segundoNum = parseInt(prompt('escribe el segundo numero'));

//  if(primerNum>segundoNum){
//     document.write(`el primer numero ${primerNum} es mayor al segundo ${segundoNum}`)
//  } else{
//     document.write(`el primer numero ${primerNum} es menor al segundo ${segundoNum}`)
//  }


// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

//   let primerNum = parseInt(prompt('escribe el primer numero'));
//   let segundoNum = parseInt(prompt('escribe el segundo numero'));
//   let tercerNum = parseInt(prompt('escribe el tercer numero'));

//   if(primerNum>segundoNum && primerNum>tercerNum){
//     document.write(`el primer numero ${primerNum} es mayor al segundo ${segundoNum} y al tercer ${tercerNum}`)
//   }else if(segundoNum>primerNum && segundoNum>tercerNum){
//     document.write(`el segundo numero ${segundoNum} es mayor al primero ${primerNumdoNum} y al tercer ${tercerNum}`)
//   } else{
//      document.write(`el tercer numero ${tercerNum} es mayor al segundo ${segundoNum} y al primer ${primerNum}`)
//    }



// 8.- Escribe un programa que pida un número y diga si es divisible por 2

//  let numero = parseInt(prompt('introduce un numero'));
// if(numero % 2 == 0){
//     document.write(`el numero ${numero} es divisible`);
// } else {
//     document.write(`el numero ${numero} no es divisible`)
// }


 let texto = prompt('escribe algo').toLocaleLowerCase();
 let arrayVocal = texto.split('')
// console.log(arrayVocal)
let a = 'a'
let e = 'e'
let i = 'i'
let o = 'o'
let u = 'u'

const vocales = ()=> {

    if(arrayVocal.includes(a)){
        console.log(`tengo la vocal a`)
    } else if(arrayVocal.includes(e)){
        console.log(`tengo la vocal e`)
    } else if(arrayVocal.includes(i)){
        console.log(`tengo la vocal i`)
    } else if(arrayVocal.includes(o)){
        console.log(`tengo la vocal o`)
    } else if(arrayVocal.includes(u)){
        console.log(`tengo la vocal u`)
    }
 }
 vocales()

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
// (sólo hay que comprobar si lo es por uno de los cuatro)

// let numero = parseInt(prompt('escribe un numero'));

// if( numero % 2 === 0 || numero % 5 === 0 ){
//     if(numero % 2 === 0 && numero % 5 === 0 ){
//         console.log(`el numero ${numero} es divisible por 2 y 5`)
//     }
//     else if( numero % 2 === 0){
//         console.log(`el numero ${numero} es divisible por 2`)
//     }else if(numero % 5 === 0){
//         console.log(`el numero ${numero} es divisible por 5`)
//     }
// } else if(numero % 3 === 0){
//     console.log(`el numero ${numero} es divisible por 3`)
// } else if(numero % 7 === 0){
//     console.log(`el numero ${numero} es divisible por 7`)
// }  else {
//     console.log('introduciste un caracter que no es un numero o no es divisible por 2,3,5 o 7')
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
// (hay que decir todos por los que es divisible)

// let numero = parseInt(prompt('introduce un numero'));

// if( numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,3,5,7`);
// } else if ( numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0){
//     document.write(`el numero ${numero} es divisible por 2,3,5`);
// } else if( numero % 2 === 0 && numero % 3 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,3`)
// } else if( numero % 2 === 0 && numero % 5 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,5`)
// } else if( numero % 2 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,7`)
// } else if( numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 3,5,7`);
// } else if( numero % 3 === 0 && numero % 5 === 0){
//     document.write(`el numero ${numero} es divisible por 3,5`);
// } else if( numero % 3 === 0 && numero % 7 === 0){
//     document.write(`el numero ${numero} es divisible por 3,7`);
// }  else if( numero % 2 === 0 && numero % 5 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,5,7`);
// } else if( numero % 5 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 5,7`);
// }  else if( numero % 2 === 0 && numero % 3 === 0 && numero % 7 === 0 ){
//     document.write(`el numero ${numero} es divisible por 2,3,7`);
// } else {
//     console.log('introduciste un caracter que no es un numero o no es divisible por 2,3,5 o 7') 
// }


alert('hola')