//segun parte del ejercicio.
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

//Bucle para pedir la cantidad de alumnos y sus nombres
for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)), 0];
}
//Función constante
const tomarAsistencia = function(nombre,p){
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
//función for para la toma de  asistencia con for in
for(i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
//Creación de un for in para mostrar los alumnos
for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    _______Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>`;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style= 'color:red'> REPROBADO POR INASISTENCIAS</b><br><br>";
    }else{
        resultado+= "<br><br>";
    } 
    document.write(resultado);
}