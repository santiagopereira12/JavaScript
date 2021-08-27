
let nombres, apellido1, apellido2;
nombres = "Santiago";
apellido1 = "Pereira";
apellido2 = "Gonzalez";
alert(nombres);
alert(apellido1);
alert(apellido2);

let respuesta = prompt("como te encuentras");
alert(respuesta + ", ah pa saber.");

let numero = 15;
numero += 5;
document.write(numero);

saludo = "¡hola mundo!";
pregunta = "¿como te tratan?";
frase = saludo + pregunta;
document.write(frase);
numero1 = "9";
numero2 = 3;
union = numero1.concat(numero2);
document.write(union);

oracion = `, soy ${nombres} y esta es mi primera pagina, `;
document.write(oracion);

let valor1 = true;
let valor2 = true;
let comparacion = numero == numero1;
let comparation = true;
document.write(comparacion);
document.write(comparation);

person = "Mamahuevo";
if (person == "Cristian"){
    alert("la concha de tu madre pibe");
}else if (person == "Santi"){
    alert("puro nombre de campeon");
}else{
    alert("qa ver pendejo que nombre tan cacorro");
}
