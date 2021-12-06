//Inicio de curso p6.
let Bienvenida = "<b style= 'color:red'>Seguimos con el curso de Javascript p6</b><br>";
document.write(Bienvenida);

//Metodos de seleccion de elementos.
parrafo = document.getElementById("parrafo");
document.write(parrafo);

seleccionar = document.getElementsByTagName("p");
document.write(seleccionar);

clases = document.querySelector(".prueba");
document.write(clases);