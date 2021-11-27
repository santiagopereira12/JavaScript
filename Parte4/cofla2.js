//funcion para obtener información.
const obtenerInformacion = function(materia){
    materias = {
        matematicas: ["Joan","Santiago","Tatiana","Cristian","Shanill"],
        ingles: ["Lina","Cofla","Tatiana","Cristian","Shanill"],
        programacion: ["Hernan","Cofla","Santiago","Tatiana"],
        logica: ["Andres","Cofla","Santiago","Tatiana","Cristian","Shanill"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = function(materia){
    let informacion = obtenerInformacion(materia);
    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`el profesor de <b>${informacion[1]}</b> es: <b style ='color: red'>${profesor}</b><br>
        los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = function(alumno){
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " +info);
        }
    }
    return `<b style= 'color:blue'>${alumno}</b> esta en: <b>${cantidadTotal}</b> clases: <b style= 'color:green'>${clasesPresentes}</b><br>`;
}

mostrarInformacion("matematicas");
mostrarInformacion("ingles");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("Cofla"));
document.write(cantidadDeClases("Santiago"));