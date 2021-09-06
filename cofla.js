helado1 = "helado de Agua = 600, ";
helado2 = "helado de Crema = 1000, ";
helado3 = "helado de vainilla = 1600, ";
helado4 = "helado de chocolate = 1700, ";
helado5 = "helado de fresa = 1800, ";
helado6 = "helado de browni = 2900, ";
helado7 = "helado de oreo = 2900, ";

let dineroCofla = prompt("¿cuanto dinero posees Cofla?");
let dineroCristian = prompt("¿cuanto dinero posees Cristian?");
let dineroSantiago = prompt("¿cuanto dinero posees Santiago?");

if (dineroCofla >= 600 && dineroCofla < 1000){
    alert("Cofla comprate el " + helado1);
    dineroCofla -= 600;
}else if(dineroCofla >= 1000 && dineroCofla < 1600){
    alert("Cofla comprate el " + helado2);
    dineroCofla -= 1000;
}else if(dineroCofla >= 1600 && dineroCofla < 1700){
    alert("Cofla comprate el " + helado3);
    dineroCofla -= 1600;
}else if(dineroCofla >= 1700 && dineroCofla < 1800){
    alert("Cofla comprate el " + helado4);
    dineroCofla -= 1700;
}else if(dineroCofla >= 1800 && dineroCofla < 2900){
    alert("Cofla comprate el " + helado5);
    dineroCofla -= 1800;
}else if(dineroCofla >= 2900){
    alert("Cofla comprate el " + helado6 + " o tambien el " + helado7);
    dineroCofla -= 2900;
}else{
    alert("veo pirobo levantese las lukas completas");
}

if (dineroCristian >= 600 && dineroCristian < 1000){
    alert("Cristian comprate el " + helado1);
    dineroCristian -= 600;
}else if(dineroCristian >= 1000 && dineroCristian < 1600){
    alert("Cristian comprate el " + helado2);
    dineroCristian -= 1000;
}else if(dineroCristian >= 1600 && dineroCristian < 1700){
    alert("Cristian comprate el " + helado3);
    dineroCristian -= 1600;
}else if(dineroCristian >= 1700 && dineroCristian < 1800){
    alert("Cristian comprate el " + helado4);
    dineroCristian -= 1700;
}else if(dineroCristian >= 1800 && dineroCristian < 2900){
    alert("Cristian comprate el " + helado5);
    dineroCristian -= 1800;
}else if(dineroCristian >= 2900){
    alert("Cristian comprate el " + helado6 + " o tambien el " + helado7);
    dineroCristian -= 2900;
}else{
    alert("veo marico levantese las lukas completas");
}

if (dineroSantiago >= 600 && dineroSantiago < 1000){
    alert("Santiago comprate el " + helado1);
    dineroSantiago -= 600;
}else if(dineroSantiago >= 1000 && dineroSantiago < 1600){
    alert("Santiago comprate el " + helado2);
    dineroSantiago -= 1000;
}else if(dineroSantiago >= 1600 && dineroSantiago < 1700){
    alert("Santiago comprate el " + helado3);
    dineroSantiago -= 1600;
}else if(dineroSantiago >= 1700 && dineroSantiago < 1800){
    alert("Santiago comprate el " + helado4);
    dineroSantiago -= 1700;
}else if(dineroSantiago >= 1800 && dineroSantiago < 2900){
    alert("Santiago comprate el " + helado5);
    dineroSantiago -= 1800;
}else if(dineroSantiago >= 2900){
    alert("Santiago comprate el " + helado6 + " o tambien el " + helado7);
    dineroSantiago -= 2900;
}else{
    alert("veo rey no te puedo fiar");
}

alert(`Cofla te sobran ${dineroCofla} pesos`);
alert(`Cristian te sobrtan ${dineroCristian} pesos`);
alert(`Santiago te sobran ${dineroSantiago} pesos`);
