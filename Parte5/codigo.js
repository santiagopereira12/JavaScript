//inicio de curso p5.
let Bienvenida = "<b style= 'color:red'>Seguimos con el curso de Javascript p5</b><br>";
document.write(Bienvenida);

//assert().
console.assert(5 < 4);

//count().
console.count();
console.count();
console.count();
console.count();
console.count();
//countReset().
console.countReset();
console.count();

//time().
console.time();

function sumar(num1,num2){
    document.write(num1, num2);
    console.timeLog();
}
sumar (2,4);
sumar (6,5);
sumar (2,43);
sumar (6,54);
sumar (21,4);
sumar (62,5);
console.timeEnd();

console.log("%cHola mundo", "color:red;background:green;padding:20px 50px;border: 5px solid blue");