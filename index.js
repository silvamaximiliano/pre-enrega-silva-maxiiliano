function correr(){
    let apellido = prompt("Por favor ingrese su apellido ");
    let nombre = prompt("cual es tu nombre ");
    let edad = prompt("cual es tu edad ");
    let año_actual = 2023
    let jubilacion = 65

    let calculo = jubilacion - edad;
    let jubilo = año_actual + calculo;

    alert("hola " + nombre + " "+ apellido);
    alert("te vas a jubilar en el año "+ jubilo);
}
function sumar(){
    let primerNumero =parseInt( prompt("Ingrese primer numero "));
    let segundoNumero =parseInt( prompt("Ingrese segundo numero "));
    

    let calculo = primerNumero + segundoNumero;
    
    alert("El Resultado es  " + calculo);
}
function resta(){
    let primerNumero =parseInt( prompt("Ingrese primer numero "));
    let segundoNumero =parseInt( prompt("Ingrese segundo numero "));
    

    let calculo = primerNumero - segundoNumero;
    
    alert("El Resultado es  " + calculo);
}
function multiplicacion(){
    let primerNumero =parseInt( prompt("Ingrese primer numero "));
    let segundoNumero =parseInt( prompt("Ingrese segundo numero "));
    

    let calculo = primerNumero * segundoNumero;
    
    alert("El Resultado es  " + calculo);
}
function divicion(){
    let primerNumero =parseInt( prompt("Ingrese primer numero "));
    let segundoNumero =parseInt( prompt("Ingrese segundo numero "));
    

    let calculo = primerNumero / segundoNumero;
    
    alert("El Resultado es  " + calculo);
}
for (let a = 3; a>=1; a--) {
    alert("El programa iniciara en "+a)
    
    
}
    alert("primer pre entrega  ");
    let nombre = prompt("Cual es tu nombre ?");
    let apellido = prompt("Cual es tu apellido ?");


    
    

    let calculo = nombre + apellido;
    alert("Bievenido  "+nombre+" "+apellido+".!");
alert("tiene acceso a el programa elige las opciones 1-suma 2-resta 3-divicion 4-multiplicacion 5-saber tu jubilacion  ");

let pregunta =parseInt(prompt("Cual Numero Eliges"));
let i=false



while (i===false) {
if (pregunta ===1) {
    i=true
   sumar()
}else if (pregunta===2) {
    resta()  
    i=true  
}else if (pregunta===3) {
    divicion() 
    i=true   
}else if (pregunta===4) {
    multipicacion() 
    i=true   
}else if (pregunta===5) {
    corre() 
    i=true   
}else{
        pregunta =parseInt(prompt("Cual Numero Eliges"));

}
}




