let numeroCP = Math.floor(Math.random()*(10-1+1)+1);
    console.log(numeroCP);

let numeroUser = parseInt(prompt("Adivina el numero"));
let vidas = 3;

    while(numeroCP !== numeroUser && vidas > 1){
        vidas --;
        numeroUser = parseInt(prompt("Vuelve a interntarlo"));
    }

    if(numeroCP === numeroUser){
        console.log("Ganaste");
    }else{
        console.log("Perdiste");
    }