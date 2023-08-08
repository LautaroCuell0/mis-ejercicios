//agregar un producto a la lista (usar un bucle que permita seguir ingresando productos 
//hasta dejar el prompt vacio o presionar cancelar)

//Listar todos los productos de la lista

//Borrar un producto de la lista (ingresar el nombre del producto a eliminar con un prompt)

// filtrar un producto por una o varias letras (ingresar el termino a filtrar con un prompt)

let carritos = [];
let producto = prompt('ingresa un producto');

    while (producto !== null) {
        carritos.push(producto)
        alert('se agrego producto')
        producto = prompt('agregar producto')
    } 

    console.log(carritos)