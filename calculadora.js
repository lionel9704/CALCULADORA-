const sumar = require("./funciones/sumar");
const restar = require("./funciones/restar");
const multiplicar = require("./funciones/multiplicar");
const dividir = require("./funciones/dividir");


const sum1 = 20;
const sum2 = 25;

const resultado = sumar(sum1, sum2);

console.log(sum1,"+", sum2, "=", resultado);

const resta = restar(sum1, sum2);

console.log(sum1, "-", sum2, "=", resta);

const mult1 = 5;
const mult2 = 5;
const multiplicacion = multiplicar(mult1, mult2);
console.log(mult1, "*", mult2, "=", multiplicacion);

const mutl3 = 0;

const multiplicacionConCero = multiplicar(mult1, mutl3);

console.log(mult1, "*", mult2, "=", multiplicacionConCero);

const div1 = 27;
const div2 = 3;

const division = dividir(div1, div2);
 
console.log(div1, "/", div2, "=", division);

const div3 = 0;

const divisionConCero = dividir(div1, div3);

console.log(div1, "/", div3, divisionConCero);








