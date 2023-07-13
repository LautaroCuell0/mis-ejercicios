//function declarativa

// function hola(){
//   document.write('hola que tal')
// }
// hola()

//funcion anonima
// let hola2 = function(){
//    document.write('hola que tal 2 ')
// }
// hola2()

//funcion arrow
// let hola3 = ()=> {
//    document.write('hola que tal pero 3')
// }

// hola3()



// const hi = nombre => alert('hola' + nombre);

// function useRegister(saludo){
//    const nombre =  prompt('ingresa tu nombre');
   

// }

 let products = ['gaseosa', 'agua', 'cerveza', 'vino', 'fernet', 'gin', 'vodka'];
 let carrito = [];

 const agregarproducto = () => {
     const productoAgregado = prompt('Que producto desea llevar?').toLowerCase()
     if(products.includes(productoAgregado)){
      carrito.push(productoAgregado);
      alert('producto agregado!')
     }else{
      alert('No vendemos ese producto, volve la proxima!')
     }
  }
 
  const mostrarCarrito = () => {
      alert('tus productos selecionados son: ' + carrito.join('\n ')) 
  }


  const eliminarProducto = ()=>{
    let eliminar = prompt('escribe el elemento que desesa eliminar').toLowerCase();
      let posicion = carrito.indexOf(eliminar)
    if(carrito.includes(eliminar)){
     carrito.splice(eliminar,1)
    } else {
      alert('el elemento que deseas eliminar no existe o tipeaste mal')
    }

  }

