class animales  {
  constructor (nombre, edad){
    this.edad = edad,
    this.nombre = nombre
  }
  
  emitirSonido(){
    document.write('se emitido un sonido')
  }

}


class perro extends animales{
    constructor(nombre,edad){
        super(nombre,edad)
    }

    emitirSonido(){
        document.write('   guagua')
    }
}

class gato extends animales{
    constructor(nombre,edad){
        super(nombre,edad)
    }

    emitirSonido(){
        document.write('   miau miau')
    }
}

let carey = new gato ('bbta', 2,)
let salchicha = new perro ('foster', 6)

salchicha.emitirSonido()
carey.emitirSonido()