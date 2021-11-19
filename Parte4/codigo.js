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

//mostrar en pantalla
document.write(resultado);
document.write(resultado2 +"<br>");
document.write(validar +"<br>");
document.write(ultimo +"<br>");
document.write(gestion +"<br>");
document.write(monstr +"<br>");