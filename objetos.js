//FUNCION CONSTRUCTORA

// function Teams (nombre,colores, gente){
//     this.nombre = nombre;
//     this.colores = colores;
//     this.gente = gente
// }

// let riverPlate = new Teams ('River Plate', ['rojo','blanco'], '99,12%');//instanciamos

// console.log(riverPlate)

// //FUNCION OBJETOS ATRAVES DE CLASES

// class country {
//    constructor (name, people){
//     this.name = name;
//     this.people = people
//    }
// }

// const argentina = new country ('argentina', 40000000);//intanciamos 
// const brasil = new country('brasil', 5000000000)


let pelis = [
    {id: '1', name: 'spiderman', anio: '2001', sinopsis: 'el heroe regresa'},
    {id: '2', name: 'The Batman', anio: '2020', sinopsis: 'caballero de gotham vive un aventura'},
    {id: '3', name: 'midsomar', anio: '2018', sinopsis: 'vive la aventura de una secta'},
    {id: '4', name: 'seven', anio: '2005',sinopsis: 'descubre un caso aterrador'},
    {nombrePelis: function(){
        console.log(pelis[0].sinopsis)
        console.log(pelis[1].name)
        console.log(pelis[2].name)
        console.log(pelis[3].name)
    }}
]



class peliculas {
    constructor (nombre, anio, id){
        this.name = nombre,
        this.anio = anio,
        this.id = id
    };
}

let spiderman = new peliculas ('Amazing Spiderman', 2012, 1);
let superman = new peliculas ('Man of Steel', 2013, 2);
let americanPsycho = new peliculas ('Un psicopata americano', 2005, 3)

// console.log(spiderman.name)

// console.log(pelis[0].name);
// console.log(pelis[3].anio);
// console.log(pelis[2].id)
console.log(pelis[4].nombrePelis())
