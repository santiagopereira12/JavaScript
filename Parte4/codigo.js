//inicio de curso p4.
let Bienvenida = "<b style = 'color: red'>Seguimos con el curso de Javascript p4</b><br>";
document.write(Bienvenida);

//metodos de cadena.
//concat().
let cadena = "cadena de prueba";
let cadena2 = " holii<br>";
resultado = cadena.concat(cadena2);
//startswith().
resultado2 = cadena.startsWith(cadena2);
//endswith().
let p = "a";
validar = cadena.endsWith(p);
//includes().
let saludo = "Aprendiendo Javascrip joputa";
let dent = "joputa";
ultimo = saludo.includes(dent);
//indexof().
gestion = saludo.indexOf(dent);
//lastindexof().
let apt = "a";
monstr = saludo.lastIndexOf(apt);
//padstart().
let frase = "abc";
rellenar = frase.padStart(10,"e");
//padend().
finalizar = frase.padEnd(10,"b");
//repeat().
let cris = "Cristian mama burra. ";
insulto = cris.repeat(7);
//split().
let aburrimiento = "hola sapo perro como estas";
conteos = aburrimiento.split(" ");
//substring().
tecla = aburrimiento.substring(3,9);
//tolowercase().
let Arturo = "tiene el PITO del TAMAÑO de la LETRA";
tamaño = Arturo.toLowerCase();
//touppercase().
tamaño2 = Arturo.toUpperCase();
//tostring().
let numero = 57;
conversion = numero.toString();
//trim().
let palabras = "     hola perra hijueputa.   ";
elim = palabras.trim();
//trimend().
elimend = palabras.trimEnd();
//trimstart().
elimstart = palabras.trimStart();

//mostrar en pantalla METODOS DE CADENA.
document.write(resultado);
document.write(resultado2 +"<br>");
document.write(validar +"<br>");
document.write(ultimo +"<br>");
document.write(gestion +"<br>");
document.write(monstr +"<br>");
document.write(rellenar +"<br>");
document.write(finalizar +"<br>");
document.write(insulto +"<br>");
document.write(conteos[3] +"<br>");
document.write(tecla +"<br>");
document.write(tamaño +"<br>");
document.write(tamaño2 +"<br>");
document.write(5+conversion +"<br>");
document.write(elim +"<br>");
document.write(elimend +"<br>");
document.write(elimstart +"<br>");

document.write("<br>");//separar por un espacio.

//Metodos de Arrays.
//pop().
let nombres = ["Santiago","Cristian","Tatiana"];
document.write("<b>ARRAY ORIGINAL: " +nombres +"</b><br>");
let respuesta = nombres.pop();
//shift().
let respuesta2 = nombres.shift(); 
//push().
let respuesta3 = nombres.push("Shanill");
//reverse().
let numeros = [1,2,3,4,5,6,7,8,9,10];
document.write("<b>ARRAY ORIGINAL: " +numeros +"</b><br>");
let orden = numeros.reverse();
//unshift().
let nuevos = numeros.unshift(0);
//sort().
let cosas = ["almohada","zapato","nevera","comida","soporte","liberalismo"];
document.write("<b>ARRAY ORIGINAL: " +cosas +"</b><br>");
let ordenar = cosas.sort();
//splice().
let comunismo = cosas.splice(1,3,"Marx","Engels");
//join().
document.write(cosas +"<br>");
let duplicado = cosas.join("<br>Elemeto: ");
//slice().
let mostar = cosas.slice(1,3);
//filter().
document.write("<br>");
let filtros = ["mesa","silla","sofa","tabla","cojin"];
solucion = filtros.filter(filtro => filtro.length > 4);
document.write(solucion +"<br>");
//foreach().
filtros.forEach(function(separacion){
    document.write(separacion +"<br>");
});
document.write("<br>");

//mostrar en pantalla METODOS DE ARRAYS.
document.write(respuesta +"<br>");
document.write(respuesta2 +"<br>");
document.write(respuesta3 +"<br>");
document.write(orden +"<br>");
document.write(nuevos +"<br>");
document.write(ordenar +"<br>");
document.write(comunismo +"<br>");
document.write("Elemento. " +duplicado +"<br>");
document.write(mostar +"<br>");
document.write("<br>");

//Objeto Math(Basico).
//sqrt().
let a = Math.sqrt(25);
//cbrt().
let b = Math.cbrt(25);
//max().
let c = Math.max(20,21,52,53);
//min().
let d = Math.min(20,21,52,53);
//random().
let e = Math.random()*100;
e = e.toString();
erdm = e[0] + e[1];
if(e[1] == "."){
    erdm = e[0];
}
//round().
let f = Math.random()*100;
f = Math.round(f);
//fround().
let g = Math.fround(34.7);
//floor().
let h = Math.random()*99;
h = Math.floor(h+1);
//PI.
let i = Math.PI;
//SQRT1_2.
let j = Math.SQRT1_2;
//SQRT2.
let k = Math.SQRT2;
//E.
let l = Math.E;
//LN2.
let m = Math.LN2;
//LN10.
let n = Math.LN10;
//LOG2E.
let ñ = Math.LOG2E;
//LOG10E.
let o = Math.LOG10E;
//trunc().
let q = Math.trunc(50.3895);

//mostrar en pantalla OBJETO MATH.
document.write(a +"<br>");
document.write(b +"<br>");
document.write(c +"<br>");
document.write(d +"<br>");
document.write(erdm +"<br>");
document.write(f +"<br>");
document.write(g +"<br>");
document.write(h +"<br>");
document.write(i +"<br>");
document.write(j +"<br>");
document.write(k +"<br>");
document.write(l +"<br>");
document.write(m +"<br>");
document.write(n +"<br>");
document.write(ñ +"<br>");
document.write(o +"<br>");
document.write(q +"<br>");