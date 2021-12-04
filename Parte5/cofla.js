const materias = {
    algebra: [90,7,3,"Algebra"],
    calculo: [95,8,3,"Calculo"],
    logica: [98,10,4,"Logica"],
    programacion: [96,9,4,"Programacion"],
    analisis: [100,10,4,"Analisis"],
    datos: [99,9,4,"Datos"],
    investigacion: [90,8,3,"Investigacion"],
    fisica: [70,7,3,"Fisica"],
    ingles: [60,5,2,"Ingles"]
}

const aprobar = function(){
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3])
        if(asistencias >=90){
            console.log("%c   Asistencias completas","color:green");
        }else{
            console.log("%c   Asistencias incompletas","color:red");
        }
        if(promedio >=7){
            console.log("%c   Promedio alcanzado","color:green");
        }else{
            console.log("%c   Promedio bajo","color:red");
        }
        if(trabajos >=3){
            console.log("%c   Trabajos completos","color:green");
        }else{
            console.log("%c   Trabajos incompletos","color:red");
        }
    }
}

aprobar();