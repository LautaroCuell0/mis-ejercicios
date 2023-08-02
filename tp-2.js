 //Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
 //si la edad ingresada no es un número válido indicarlo en un mensaje.
 
 
//  let nombre = prompt('introduce tu nombre').toLowerCase();
//  let edad = parseInt(prompt('introduce tu edad'));


//     if(edad>=18){
//         document.write(`hola ${nombre} tu edad es de ${edad} por lo tanto puedes conducir`)
//     } else if(edad<18) {
//         document.write(`hola ${nombre} por tu edad aun no puedes conducir`)
//     } else if(edad !== typeof Number){
//         document.write(`hola ${nombre}, debes introducir un numero en tu edad`)
//     }

// let mayoriaEdad = ()=>{

//     if(edad>=18){
//        return document.write(`hola ${nombre} tu edad es de ${edad} por lo tanto puedes conducir`)
//     } else if(edad<18) {
//        return document.write(`hola ${nombre} por tu edad aun no puedes conducir`)
//     } else if(edad !== typeof Number || edad !== null){
//        return document.write(`hola ${nombre}, debes introducir un numero en tu edad`)
//     }
// }

// mayoriaEdad()

//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en 

//un alert según los siguientes rangos de nota:

//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente

//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
//Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = parseFloat(prompt('introduce tu nota'));

// let promocion = ()=>{
//     // switch (nota) {
//     //     case 0 || 1 || 2:
//     //         document.write('muy insuficiente')
//     //         break;
//     //     case 3 || 4:
//     //         document.write(' insuficiente')
//     //         break;
//     //     case 5 || 6:
//     //         document.write('Suficiente')
//     //         break;
//     //     case 7:
//     //         document.write('Bien')
//     //         break;
//     //     case 8 || 9:
//     //         document.write('Notable')
//     //         break;
//     //     case 10:
//     //         document.write('Sobresaliente')
//     //         break;
//     //     default:
//     //         document.write('introduce la nota')
//     //         break;
//     // }
//     if(nota<=2){
//         document.write('muy insuficiente')
//     } else if(nota==3 || nota ==4){
//         document.write(' insuficiente')
//     } else if(nota==5 || nota ==6){
//         document.write(' Suficiente')
//     } else if(nota==7){
//         document.write(' Bien')
//     } else if(nota== 8|| nota ==9){
//         document.write('Notable')
//     } else if(nota==10){
//         document.write('Sobresaliente')
//     } else if(nota>10){
//         document.write('numero erroneo')
//     } else{
//         document.write('introduce la nota')
//     }
// }
// promocion()



//mostrar la longuitud del arreglo
//mostrar el arreglo

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//  Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 
// 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];



// let listaMeses = [
//     {
//         meses:['•enero', '•febrero', '•marzo', '•abril', '•mayo', '•junio', '•julio', 
//         '•agosto', '•septiembre', '•octubre', '•noviembre', '•diciembre'].join('\n'),
        
//          listaMonth: function(){
//              alert(`los meses son: ${this.meses}`)
//         }
//     },
   
// ]

// listaMeses.forEach(listaMeses=>listaMeses.listaMonth())


// let ciudadesAgr = [];

// function agregarCiudades(){
//     let ciudades = prompt('ingresa ciudades').toLocaleLowerCase()
//     ciudadesAgr.push(ciudades)
//     alert('se agregado al ciudad')

// }

// function mostrarCiudades(){
//     alert(`las ciudades agregadas son: ${ciudadesAgr.join('\n')}`)
// }

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

//  let numero = parseInt(prompt('introduce el numero'));

// for(let i=1; i<=numero; i++){
//     for(let u = 0; u<i; u++){
//         document.write(i)
//     }
//     document.write('<br>')
// }


// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
//  usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


// I CANT


// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario
//  (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

    // let numero = parseInt(prompt('introduce el numero'));

    // if(numero>=50){
    //     alert('no se permiten numeros mayores a 50')
    // } else{
    //     for(let i = 0; i<=numero; i++){
    //     for(let u = 0; u<i; u++){
    //         document.write(i)
    //     }
    //     document.write('<br>')
    // }
    // }

for(let i = 1; i<=500; i++){
    document.write('<br>')
    if(i % 4 === 0 && i % 9 === 0 ){
        document.write('multiplo de 4 y 9')
    } else if (i % 4 === 0){
        document.write('multiplo de 4')
    } else if(i % 9 === 0){
        document.write('multiplo de 9')
    }
    document.write(i)
}
    







