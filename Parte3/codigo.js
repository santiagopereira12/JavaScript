//inicio de curso p3
let Bienvenida = "<b style= 'color: red'> Segimos con el curso de Javascript p3</b> <br>";
document.write(Bienvenida);

//Creación de clase para trabajar dentro.
class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
    verInformacion(){
        document.write(this.info +"<br>");
    }
    /* ladrar(){
        if(this.especie == "Perro" || this.especie == "perro"){
            document.write("¡waoh! <br>");
        }else{
            document.write("No puede ladrar ya que es un " +this.especie +"<br>");
        }
    } */
}
//Herencia
class Perro extends Animal{
    constructor(especie, edad,color,raza){
        super(especie, edad,color)
        this.raza = null;
    }
    static ladrar(){
        alert("¡WAOH!");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}
//Instanciar la clase.
const gato = new Animal("Gato",3,"amarillo");
const perro = new Perro("Perro",5,"negro","pitbul");
const conejo = new Animal("Conejo",1,"blanco");
/* document.write(gato.info +"<br>");
document.write(perro.info +"<br>");
document.write(conejo.info +"<br>"); */
gato.verInformacion();
perro.setRaza = "Cristian";
document.write(perro.getRaza);
conejo.verInformacion();
document.write("<br>");
document.write("<b>hasta la proxima malparido hijueputa</b>");