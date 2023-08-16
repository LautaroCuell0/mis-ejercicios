class user {
    constructor(id, nombre, email, password){
        this.id = id
        this.nombre = nombre;
        this.email = email;
        this.password = password
    }
}

let baseUsers 
if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'))
}

const users = [
    new user (1, 'nicole', 'nicole@gmail.com', '123456'),
    new user (2, 'matias', 'matias@gmail.com', '123456')
] 

function login(event){
    event.preventDefault()
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const userFound = users.find(user => user.email == email && user.password == password)

     if(userFound){
        
             alertMenssage(`😛BIENVENIDO ${userFound.nombre} `)
             window.location.assign(window.location.origin + '/trabajos.html')

     } else {
         alertMenssage('usuario incorrecto o contrasenia. Intenta de nuevo')
    
     }

document.querySelector('form').reset()

}


function alertMenssage(message){
    //creamos el elemento
     let alerta = document.createElement('div' );
    //agregamos estilos
    alerta.classList.add('alert', 'alert-danger', 'my-5');
     alerta.setAttribute('role', 'alert')
    //agregamos la informacion
    alerta.innerText = message;
    //buscamos al padre
    let container = document.querySelector('form');
    container.appendChild(alerta)

}