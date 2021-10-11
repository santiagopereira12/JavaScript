
let Bienvenida = "Seguimos con el curso de javascript. <br>";
document.write(Bienvenida);

let comida = ["hambirguesa <br>", "empanada <br>", "pizza <br>", "salchipapa <br>", "perrrocaliente <br>"];
document.write(comida[2]);

let computador = {
    marca: "Janus",
    procesador: "Intel core i3",
    ram: "12GB",
    espacio: "500GB"
};

let marca = computador["marca"];
let procesador = computador["procesador"];
let ram = computador["ram"];
let espacio = computador["espacio"];

let referencia = `La marca del dispositivo es: <b>${marca}</b> <br>
                  El procesador es: <b>${procesador}</b> <br>
                  La ram es de: <b>${ram}</b> <br>
                  La memoria es de: <b>${espacio}</b> <br>`;

document.write(referencia);
