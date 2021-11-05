//primera parte del ejercicio.
let free = false;
//creamos la función
const validarCliente = function(time){
    let edad = prompt ("ingresa tu edad chupa pijas");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("Pasa cacorro, gratiniano porque llegaste puntual a las 2");
            free = true;
        }else{
            alert(`son las ${time}HRS pasa pues, pero las lukas primero rey`);
        }
    }else{
        alert("si no tienes los 18, pa tu casa a ver pocoyo");
    }
}
//llamamos la función y le damos parametros de uso.
validarCliente(12);
validarCliente(12,45);
validarCliente(01,15);
validarCliente(01,59);
validarCliente(02,00);
validarCliente(02,15);
validarCliente(02,30);
validarCliente(02,45);