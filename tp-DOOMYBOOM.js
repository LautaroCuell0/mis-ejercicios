var numeroRandom;
console.log(numeroRandom)


function numeroAleatorio(){
    //  console.log(numeroUser)
    numeroRandom =  parseInt(Math.random()*10);
    const comenzo = document.getElementById('cover-star')
    comenzo.innerHTML = `<h2> Comenzo el juego </h2>`
    // console.log(`el numero random es ${numeroRandom}`) 
}

function juego(){
    const numberUser = parseInt(document.getElementById('userInfo').value)
    const informeUser = document.getElementById('resultado')
    
    console.log(numberUser)
    if(numberUser === numeroRandom){
        informeUser.innerHTML = `<p>Felicidades acertaste</p>`
    } else if (numberUser>numeroRandom){
        informeUser.innerHTML = `<p>Estas tirando por lo alto, debes mirar mas hacia abajo</p>`
    } else {
        informeUser.innerHTML = `<p>Estas tirando por lo bajo, debes mirar mas hacia arriba</p>`
    }
}

