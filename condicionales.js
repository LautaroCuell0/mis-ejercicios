// let primerNumero = parseInt(prompt('ingresa el primer numero'))
// let segundoNumero = parseInt(prompt('ingresa el segundo numero'))

// if (primerNumero >= segundoNumero){
//     console.log(`el primer numero ${primerNumero} es mayor o igual que el segundo, el cual es ${segundoNumero}`)
// // } else if(primerNumero = segundoNumero){
// //     console.log(`el primer numero ${primerNumero} es igual al segundo, el cual es ${segundoNumero}`)
// // 
// } 
// else {
//     console.log(`el primer numero ${primerNumero} es menor que el segundo, el cual es ${segundoNumero}`)
// }

//PEDIR NUMERO AL USUARIO Y VER SI ES PAR O IMPAR//

// let numero = parseInt(prompt('introduce el numero'))

// if (numero % 2 === 0){
//     console.log(`el numero ${numero} es par`)
// } else {
//     console.log(`el numero ${numero} es impar`)
// }


// pregunta la edad, si es mayor deja pasar a la fiesta pero si no consutal si viene con cun tutori sino no dejar pasar//

let edad = parseInt(prompt('ingrese tu edad'))
let tutor = prompt('tienes tutor?')
if (edad>=18){
    console.log(`${edad} tu edad es la indicada para pasar`)
} else if (edad<18 && tutor.toLowerCase().includes('si')){
   console.log(`tu edad ${edad} esta debajo de la minima pero entras con tu tutor`)
} else if(edad <= 10){
   console.log('deberias ir a una guarderia y no estar acá')
} else{
    console.log(`tu edad ${edad} no es la indicada para pasar, si no cuentas con un tutor no podras pasar`)
}