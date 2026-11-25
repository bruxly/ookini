



//}


function puedeReservar(tazasDisponibles){
    return tazasDisponibles >0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tasas");

botonReservar.addEventListener("click", function(){
    const tazasActuales = Number(contadorTazas.textContent);


    if (puedeReservar(tazasActuales)){
        contadorTazas.textContent = tazasActuales - 1;
        console.log("Reserva registrada con exito");
        alert("Reserva registrada con exito")
    }else{
        botonReservar.textContent = "Sin Cupos";
        botonReservar.disabled = true;
        console.log("No hay cupos disponibles");
        alert.log("No hay cupos disponibles")
    }
});
    //console.log("El usuario hizo clic");

