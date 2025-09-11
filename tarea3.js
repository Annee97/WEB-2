console.log("Advina el número el numero secreto");
alert("El número secreto es entre el 1 - 10");
const numsecreto = 8;
var intentos =0;
while (true){
    var respuesta = prompt("¿Cúal es el número secreto?");
    intentos++;
    if(respuesta == numsecreto){
        alert("Felicidades! adivinaste en" + intentos + "intentos");
        break;
    } else if(respuesta < numsecreto){
        alert("El número secreto es mayor");
    }

    }
