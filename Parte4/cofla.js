//funcion para sumar
class calculadora{
    constructor(){

    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for(var i = 1; i < exp; i++){
            numero = numero * num;
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}


//escoger operación
alert("Que operación vas a realizar");
let operacion = prompt("1: suma, 2: restar, 3: multiplicar, 4: dividir, 5: potenciación, 6: raiz cuadrada, 7: raiz cubica.");
const calcu = new calculadora();
//condicional
if (operacion == 1){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = calcu.sumar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}else if (operacion == 2){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = calcu.restar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}else if (operacion == 3){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado =  calcu.multiplicar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}else if (operacion == 4){
    let numero1 = prompt("ingrese primer numero");
    let numero2 = prompt("ingrese segundo numero");
    resultado = calcu.dividir(numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 5){
    let numero1 = prompt("ingrese numero a potenciar");
    let numero2 = prompt("ingrese exponente");
    resultado = calcu.potenciar(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}else if(operacion == 6){
    let numero = prompt("ingrese numero");
    resultado = calcu.raizCuadrada(numero);
    alert(`Tu resultado es: ${resultado}`);
}else if(operacion == 7){
    let numero = prompt("ingrese numero");
    resultado = calcu.raizCubica(numero);
    alert(`tu resltado es: ${resultado}`);
}
else{
    alert("No se ha podido encontrar la operación");
}