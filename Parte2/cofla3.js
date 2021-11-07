//tercera parte del ejercicio
//funcion para sumar
const sumar = function(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
//funcion para restar
const restar = function(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
//funcion para multiplicar
const multiplicar = function(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
//funcion para dividir 
const dividir = function(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
//escoger operación
alert("Que operación vas a realizar");
let operacion = prompt("1: suma, 2: restar, 3: multiplicar, 4: dividir");
//condicional
if (operacion == 1){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = sumar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}else if (operacion == 2){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = restar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}else if (operacion == 3){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado =  multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 4){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}else{
    alert("No se ha podido encontrar la operación");
}