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

let numSuma = 1;
if (numSuma < 15){
    numSuma++;
    document.write(numSuma);
    document.write("<br>joputa, severo programador nea<br>");
}

let sumNumero = 0;
while (sumNumero < 5){
    sumNumero++;
    document.write(sumNumero + "<br>");
}

do {
    sumNumero++;
    document.write(sumNumero + "<br>");
}
while (sumNumero < 5);

document.write("<br><b>INICIO DE SENTENCIA BREAK</b><br>");
let number = 0;
while(number < 10){
    number++;
    document.write(number + "<br>");
    if (number == 9){
        break;
    }
}
document.write("Finalizo. <br>");

for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    document.write(i + "<br>");
}

document.write("<br>");
let mascotas = ["perro", "gato", "hamster", "perico"];
for(animal in mascotas){
    document.write(animal + "<br>");
}
for(animal of mascotas){
    document.write(animal + "<br>");
}

document.write("<br>");
lista1 = ["Sara", "Shannill", "Tatiana"];
lista2 = ["Santiago", "Cristian", lista1, "Paula"];
forTerminar:
for(let array in lista2){
    if(array == 2){
        for(let array of lista1){
            document.write(array + "<br>");
            if(array == "Sara"){
                continue forTerminar;
            }else{
                document.write(array + "<br>");
            }
        }
    }else{
        document.write(lista2[array] + "<br>");
    }
}