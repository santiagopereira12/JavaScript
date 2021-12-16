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

//Atributos de input.
const input = document.querySelector(".inputNormal");
document.write("<br>este puto<br>" +input.className);
document.write(input.value +"<br>");
document.write(input.type="number");
const imagen = document.querySelector(".imagen");
imagen.accept = "imagen/jpg";
const minimo = document.querySelector(".minimo");
minimo.placeholder = "Escribe putito";
minimo.required = " ";
minimo.setAttribute("minLength","5");

//propiedad Style.
const editar = document.querySelector(".editar");
editar.style.color = "blue";
editar.style.backgroundColor = "green";
editar.style.padding = "30px";

//clases, classlist, metodos de classlist.
const lista = document.querySelector(".lista");
lista.classList.add("grande");
const palabra = document.querySelector(".palabra");
let valor = palabra.classList.item(3);
document.write("<br>" +valor);
palabra.classList.remove("grande");
let verificar = palabra.classList.contains("grande");
if(verificar){
    document.write("<br>la clase existe.<br>");
}else{
    document.write("<br>la clase no existe, creela por favor.<br>");
}
let cambio = palabra.classList.replace("sapo","hijueputa");
document.write(cambio +"<br>");

//Obtencion y modificacion de elementos.
const modificar = document.querySelector(".modificar");
let suma = modificar.textContent;
let suma2 = modificar.innerHTML;
let suma3 = modificar.outerHTML;
alert(suma);
alert(suma2);
alert(suma3);

//Creación de elementos.
const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
const textoDelItem = document.createTextNode("este es un item de la lista");
item.appendChild(textoDelItem);
contenedor.appendChild(textoDelItem);
console.log(item);
const algoritmo = document.querySelector(".algoritmo");
const fragmento = document.createDocumentFragment();
for(i = 0; i < 20; i++){
    const pseudo = document.createElement("PSEUDO");
    pseudo.innerHTML = "Este es el pseudocdigo";
    fragmento.appendChild(pseudo);
}
algoritmo.appendChild(fragmento);
console.log(algoritmo);

//Obtencion y modificacion de childs.
const primogenito = document.querySelector(".primogenito");
const primerHijo = primogenito.firstChild;
const primerHijito = primogenito.firstElementChild;
const hijos = primogenito.childNodes;
const hijastro = primogenito.children;
console.log(primerHijo);
console.log(primerHijito);
console.log(hijos);
console.log(hijastro);

//Metodos de child.
const parrafos = document.createElement("p").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");
primogenito.replaceChild(h2_nuevo,h2_antiguo);

let escritura = primogenito.hasChildNodes();
if(escritura){
    document.write("El elemento tiene hijos");
}else{
    document.write("el elemento no tien hijos");
}

//Propiedad de parents (padres).
console.log(h2_nuevo.parentElement);

//Propiedad siblings (hermanos).
console.log(h2_nuevo.nextSibling);
console.log(h2_nuevo.nextElementSibling);
console.log(h2_nuevo.previousElementSibling);

//Nodos una propiedad extra.
const div = document.querySelector(".div3");
console.log(div.closest(".div"));