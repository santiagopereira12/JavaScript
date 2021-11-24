//funcion para obtener información.
const obtenerInformacion = function(materia){
    materias = {
        matematicas: ["Joan","Santiago","Tatiana","Cristian","Shanill"],
        ingles: ["Lina","Cofla","Tatiana","Cristian","Shanill"],
        programacion: ["Hernan","Cofla","Santiago","Tatiana"],
        logica: ["Andres","Cofla","Santiago","Tatiana","Cristian","Shanill"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia];
    }else{
        return false;
    }
}

const mostrarInformacion = function(materia){
    let informacion = obtenerInformacion(materia);
    if(informacion !== false){
        let profesor = obtenerInformacion(materia)[0][0];
        alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`el profesor de <b>${informacion[1]}</b> es: <b style ='color: red'>${profesor}</b><br>
        los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`);
    }
}

mostrarInformacion("matematicas");
mostrarInformacion("ingles");
mostrarInformacion("programacion");
mostrarInformacion("logica");