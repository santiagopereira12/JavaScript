//solución problema.
//clase celulares, con sus especificaciones.
class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        }else{
            alert("No se puede reiniciar");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en resolución de: ${this.resolucionCamara}`);
    }
    grabarVideo(){
        alert(`Video grabado en: ${this.resolucionCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de video: <b>${this.resolucionCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}
//Clase para problema 2, celulares de alta gama
class celularAlataGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rcde){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionCamaraExtra = rcde;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciamos el reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de camara extra;: <b>${this.resolucionCamaraExtra}</b><br>`;
    }
}

celular1 = new Celular("Blanco","12g","5'","full HD","2GB");
celular2 = new Celular("Negro","15g","5.3'","HD","4GB");
celular3 = new Celular("Azul","8g","5.8'","full HD","8GB");
document.write(`${celular1.mobileInfo()}<br>${celular2.mobileInfo()}<br>${celular3.mobileInfo()}<br>`);
document.write("<b style = 'color: red'>Espesificaciones de los celulares de Alta Gama</b> <br>")
celularA1 = new celularAlataGama("Rojo","15g","5.5'","4K","12GB","full HD");
celularA2 = new celularAlataGama("Gris","16g","6","4K","16GB","full HD");
document.write(`${celularA1.infoAltaGama()}<br>${celularA2.infoAltaGama()}`);