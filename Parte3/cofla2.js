//Segunda parte del ejercicio.
class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("Instalando aplicación");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("Abriendo aplicación");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("Cerrando aplicación");
        }
    }
    desisntalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("Desinstalando aplicación");
        }
    }
    appInfo(){
        return `
        descargas: <b>${this.descargas}</b><br>
        puntuación: <b>${this.puntuacion}</b><br>
        peso: <b>${this.peso}</b><br>`;
    }
}
//instanciación.
aplicacion = new App("20.000","70%","128MB");
aplicacion2 = new App("10.000","50%","230MB");
aplicacion3 = new App("25.000","30%","120MB");
aplicacion4 = new App("30.000","78%","130MB");
aplicacion5 = new App("50.000","60%","140MB");
aplicacion6 = new App("19.000","75%","150MB");
aplicacion7 = new App("60.000","80%","600MB");
//mostrar especificaciones.
document.write(`${aplicacion.appInfo()}<br>
${aplicacion2.appInfo()}<br>
${aplicacion3.appInfo()}<br>
${aplicacion4.appInfo()}<br>
${aplicacion5.appInfo()}<br>
${aplicacion6.appInfo()}<br>
${aplicacion7.appInfo()}`);
//funciones.
aplicacion.instalar();
aplicacion.abrir();
aplicacion.cerrar();
aplicacion.desisntalar();