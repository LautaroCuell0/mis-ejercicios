class Product {
    constructor(nombre, precio, productId, descrip, imagen){ 
        this.nombre = nombre;
        this.precio = precio; 
        this.productId = productId;
        this.descrip = descrip;
        this.imagen = imagen
    }
}

let products = [
    new Product ('samsung', 60000, 'ee12sam323', 'telefono samsung tactil 4gb', 
    'https://cdn-iibml.nitrocdn.com/mIsZFyqRlkiNfZRugfIBKtdyexDtafZx/assets/images/optimized/rev-99e5996/image/cache/catalog/products_2023/samsung-s23-ultra-green-7-800x800.png'),

    new Product ('motorola', 65000, 'moto34324', 'motorola g24 8gb',
    'https://exitocol.vtexassets.com/arquivos/ids/19218062-800-auto?v=638249964387630000&width=800&height=auto&aspect=true'),

    new Product ('iphone', 200000, 'iphone2312312', 'iphone 14 pro max cam 64px', 
    'https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3eab131d-b1a0-6cab-1350-e538fd9b2419/iphone14promax-637e89105ddd4.jpg'),
    
]
 
products.forEach(
    product => {
        const newProductCard = document.createElement('div')
        newProductCard.id = product.productId // a newProductCard le asigna un id el cual viene de productId
        //le agregamos la informacion//
        newProductCard.classList.add('card', 'm-2');
        newProductCard.style.width='18rem';
        newProductCard.innerHTML = `
        <img src=${product.imagen} class="card-img-top imagenProducto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.nombre}</h5>
          <p class="card-text">${product.descrip}</p>
          <spam class="btn btn-danger"><strong>$${product.precio}</strong></spam>
          <button class="btn btn-primary my-4" onclick='agregarCarrito(productId)'>agregar al carrito</button>
          <button class="btn btn-primary">🤍</button>
        </div>
        `

        //buscamos al padre en el HTHML//

        const padreContainer = document.querySelector('main')
        padreContainer.appendChild(newProductCard)
    }
)

let carrito = []
function agregarCarrito(productId){
       let product = products.find( product => product.productId === product.id);
       carrito.push(product)
       console.log(product)

       //crear el elemento que vamos a mostrar en el modal//

       //despues deberiamos agregarle la informacion pj. estilo, clase o darle info al HTML//

       //buscamos al padre en el HTML y luego adoptamos al hijo//
}
