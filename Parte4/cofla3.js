let materias ={
    matematicas: ["Joan","Santiago","Tatiana","Cristian","Shanill"],
    ingles: ["Lina","Cofla","Tatiana","Cristian","Shanill"],
    programacion: ["Hernan","Cofla","Santiago","Tatiana"],
    logica: ["Andres","Cofla","Santiago","Tatiana","Cristian","Shanill"]
}

const inscribir = function(alumno,materia){
    personas = materias[materia];
    if(personas.length >= 21){
        document.write(`<br>lo lamento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas.<br>`);
    }else{
        personas.push(alumno);
        if(materia == "matematicas"){
            materias = {
                matematicas: personas,
                ingles: materias['ingles'],
                progrmacion: materias['programacion'],
                logica: materias['logica']
            }
        }else if(materia == "ingles"){
            materias = {
                matematicas: materias['matematicas'],
                ingles: personas,
                programacion: materias['programacion'],
                logica: materias['logica']
            }
        }else if(materia == "programacion"){
            materias = {
                matematicas: materias['matematicas'],
                ingles: materias['ingles'],
                progrmacion: personas,
                logica: materias['logica']
            }
        }else if(materia == "logica"){
            materias = {
                matematicas: materias['matematicas'],
                ingles: materias['ingles'],
                programacion: materias['programacion'],
                logica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}!, te has inscrito satisfactoriamente a ${materia} :)<br>`);
    }
}

document.write(materias['logica'] +"</br>");
inscribir("Emmanuel","logica");
inscribir("Arturo","logica");
inscribir("Emma","logica");
inscribir("Sebastian","logica");
inscribir("Sergio","logica");
inscribir("Rodrigo","logica");
inscribir("Camilo","logica");
inscribir("Carlos","logica");
inscribir("Antonio","logica");
inscribir("Kevin","logica");
inscribir("Ernezto","logica");
inscribir("Daniela","logica");
inscribir("Karen","logica");
inscribir("Valentina","logica");
inscribir("Vanessa","logica");
inscribir("Sara","logica");
inscribir("Fabian","logica");
inscribir("Humberto","logica");
inscribir("Oscar","logica");
inscribir("Moises","logica");
document.write("</br>" +materias['logica']);