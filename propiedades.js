// EJERCICIOS SOBRE LAS PROPRIEDADES // 

  let apellido = prompt('introduce tu apellido')

 console.log(apellido.substring(apellido.length -1))


  let nombre = prompt('introduce tu nombre')
  let resultado = nombre.charAt(0).toUpperCase()
  let resultado2 = nombre.substring(1).toLowerCase()
  console.log(resultado+resultado2)

//  // EJERCICIO MATH RANDOM //

 let numeroRandom = Math.floor(Math.random() * 10)

 console.log(numeroRandom)


// // PAR O IMPAR //

 let numero = parseInt(prompt('ingresa un numero'))

 if(numero % 2 === 0){
     console.log(`El numero ${numero} es par`)
 } else {
     console.log(`El numero ${numero} es impar`)
 }

//challenge 5 //

let primer = 10
let segundo = 1
let tercer = 'ardilla'

let suma = (primer + segundo)
let resta = (primer - segundo)
let division = (primer / segundo)
let resto = (primer % segundo)

if(primer % 2 === 0 && segundo % 2 === 0 ){
    console.log(`Los numeros ${primer} y ${segundo} son pares`)
} else if(primer % 2 === 0){
    console.log(`EL numero ${primer} es par pero el ${segundo} no lo es`)
} else if (segundo % 2 === 0){
    console.log(`EL numero ${segundo} es par pero el ${primer} no lo es`)
} else {
    console.log(`Los numeros ${primer} y ${segundo} no son pares`)
}