//! DOOM DOCUMENT OBJECSTS MODEL podemos acceder al HTML o todo lo visual de nuestro proyecto



//?BOOM BROWSER OBJECTS MODEL puedo acceder a toda la informacion de la pagina

// setInterval()//ejecuta una tarea en un determinado lapso de tiempo

function holaMundo(){
    document.write('hola mundo <br>')
}
// setInterval(()=>holaMundo(), 1000)

// setTimeout() ejecuta una funcion pasado un determinado lapso de tiempo pero la ejecuta una sola vez

// setTimeout(()=> holaMundo(), 5000)

//? ejercicio de tiempo, luego de los 10seg mostrar un mensaje para el despegue 

//  let contador = 10;
//  let tiempoContador = setInterval(()=>{
//      console.log('despegue en', + contador)
//      contador--
//  }, 1000)

// setTimeout ( ()=>{
//   clearInterval(tiempoContador);
//   console.log('DESPEGUEEEE')
// }, 10000

// )

//getElementById('') trae un elemeento por su ID
    //getElementByClassName('') trae a todos los elementos que pertenezcan a esa clase
    // querySelector('#texto')

function cambiarTexto(){
    
  let h2Cambio =  document.getElementById('h2-cambiar')
  h2Cambio.innerHTML = 'el texto fue modificado'
  h2Cambio.style.backgroundColor='purple'   

}

//! CAMBIAR TEMA

function cambiarTema(){
   let elementoCambiado = document.getElementById('probando-tema')
   if(elementoCambiado.classList.contains('light')){ 
    elementoCambiado.classList.add('dark')
    elementoCambiado.classList.remove('light')
   }else {
     elementoCambiado.classList.add('light')
     elementoCambiado.classList.remove('dark')
   }
}

//! POR ID getElementById('(nombre del id)')
//! POR CLASE document.getElementByCLassName('clase')\
//! POR NOMBRE DE ETIQUETA document.getElementBytagName('tag')
//! POR SELECTOR document.getElementSelector('.texto')
//! POR SELECTOR document.getElementSelectorAll('.texto')

//? crear elementos cada vez que haga click

function agregarElementos(){
    const newElement = document.createElement('div');//creamos el elemento
    newElement.classList.add('cuadrado')//le ponemos informacion al elemento pj: la clase
    newElement.innerText = 'soy un cuadrado'// sigo cargando informacion 

    const padreElemento = document.querySelector('.nuevo-elemento')//buscamos al padre para ubicarlo en el HTML
    padreElemento.appendChild(newElement)// Adoptamos al eleemento hijo

}


