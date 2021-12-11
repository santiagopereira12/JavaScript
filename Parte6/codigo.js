//Inicio de curso p6.
let Bienvenida = "<br><b style= 'color:red'>Seguimos con el curso de Javascript p6</b><br>";
document.write(Bienvenida);

//Metodos de seleccion de elementos.
parrafo = document.getElementById("<br>parrafo");
document.write(parrafo);

seleccionar = document.getElementsByTagName("p");
document.write(seleccionar);

clases = document.querySelector(".prueba");
document.write(clases);

const rangoEdad = document.querySelector(".rangoEdad");
/*cambiar el valor.
rangoEdad.setAttribute("type","color");*/
valorAtribut = rangoEdad.getAttribute("type");
document.write(valorAtribut);

//Atributos globales.
const prueba = document.querySelector(".prueba");
prueba.setAttribute("contentEditable","true");
prueba.setAttribute("dir","rtl");
prueba.removeAttribute("hidden");
const seleccion = document.querySelector(".seleccion");
seleccion.setAttribute("tabindex","0");
const eva = document.querySelector(".eva");
eva.setAttribute("title","sapo");