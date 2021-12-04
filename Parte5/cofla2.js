let trabajo = "240 minutos para trabajar";
let estudio = "100 minutos para estudiar";
let trabajosClase = "100 minutos para hacer los trabajos de las clases";
let oficio = "30 minutos para organizar la casa";
let descanso = "10 minutos para descansear";

console.log("TAREAS");
for(var i = 0; i < 14; i++){
    if(i == 0){
        console.groupCollapsed("Semana 1.");
    }
    console.groupCollapsed("Dia " +(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajosClase);
    console.log(oficio);
    console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2.");
    }
}

console.groupEnd();
console.groupEnd();