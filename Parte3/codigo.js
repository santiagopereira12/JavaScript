//inicio de curso p3
let Bienvenida = "<b style= 'color: red'> Segimos con el curso de Javascript p3</b> <br>";
document.write(Bienvenida);

//Creación de clase para trabajar dentro.
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
    verInformacion(){
        document.write(this.info +"<br>");
    }
}
//Instanciar la clase.
let gato = new animal("Gato",3,"amarillo");
let perro = new animal("Perro",5,"negro");
let conejo = new animal("Conejo",1,"blanco");
/* document.write(gato.info +"<br>");
document.write(perro.info +"<br>");
document.write(conejo.info +"<br>"); */
gato.verInformacion();
perro.verInformacion();
conejo.verInformacion();
document.write("<br>");
document.write("<b>hasta la proxima malparido hijueputa</b>");