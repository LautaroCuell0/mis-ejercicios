//escribe un programa que cree un objeto CUENTA con las siguientes propiedades
//? quiero que este objeto tenga una propiedad titular
// una propiedad saldo pero teniendo en cuenta el valor inicial 0
//quiero que tenga un metodo ingresar() que permita aniadir dinero a la cuenta, pero pasando la cantidad
//como parametro
//creo un metodo extraer() que me permita retirar dinero, tambien la cantidad pasada como parametro
//un metodo informar() retorne la informacion de el estado de cuenta.


// class cuenta {
//     constructor(titular){
//         this.id = parseInt(Math.random()*10000),
//         this.titular = titular,
//         this.saldo = 0;
//     }

//     acreditar(monto){
//         if(monto>0){
//            this.saldo = this.saldo + monto
//             console.log(`se acredito ${monto} y el total actual es de ${this.saldo}`)
//         }else if(isNaN(monto)){
//             console.log(`debe ingresar numeros`)
//         }else(
//             console.log(`tu monto debe ser mayor a 0`)
//         )
//     }
//     descontar(monto){
//         if(monto<=this.saldo && monto>0){
//             this.saldo= this.saldo - monto
//             console.log(`extrajimos ${monto} y el total actual de la cuenta es de ${this.saldo}`)
//         }else if(isNaN(monto)){
//             console.log(`debe ingresar numeros`)
//         }else(
//             console.log(`tu monto debe ser mayor a 0`)
//         )
//     }
//     total(){
//         console.log(`la cuenta ${this.id} al nombre de ${this.titular} cuenta con un saldo actual de: $ ${this.saldo}`)
//     }
// }

// let cuentaLautaro = new cuenta('lautaro')

//? ejercicios libreria 24/07

//! crea una libreria 
// 1- libros ya leidos
// 2- libros sin leer 
// 3- siguiente libro
// 4- libro actual
// 5- ultimo libro
// 6- array con todos los libros 

class listaLibros{
    constructor(duenio){
        this.duenio = duenio,
        this.libros = [],
        this.librosYaleidos = [],
        this.librosNoleidos = [],
        this.libroActual = null,
        this.ultimoLibro = null,
        this.siguienteLibro = null
    }
    agregarLibro(libro){
        this.libros.push(libro);
        if(libro.leido === true){
            this.librosYaleidos.push(libro)
        } else{
            this.librosNoleidos.push(libro)
        }
        console.warn('se agrego el libro');
    }

    empezarLibro(libro){
        this.libroActual = libro
        console.warn('se empezo a leer el libro')
    }

    finalizarLibro(libro){
        this.ultimoLibro = this.libroActual
        this.librosYaleidos.push(libro)
        this.librosNoleidos = this.librosNoleidos.filter(libritos => libritos.titulo !=this.libroActual.titulo)
            // this.librosNoleidos = this.libros.filter(books => books.titulos != this.libroActual.titulo)
        this.libroActual = null 
        this.librosNoleidos = this.siguienteLibro
        console.warn('se finalizo de leer el libro')
    }

}


//! crea un libro 

//1 titulo
//2 genero
//3 autor
//4 booleano leido o no

 class libro {
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo,
        this.genero = genero,
        this.autor = autor,
        this.leido = leido
    } 
}

let libroLautaro = new listaLibros ('lautaro')

let harryPotter = new libro ('harry potter', 'ficcion', 'JK rowling', false);
let bladeRunner = new libro ('bladder runner', 'ficcion', 'philip', false);
