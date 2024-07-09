// arrys cinco  numeros 
const ler = require('readline-sync');


let numeros = [];

for (let i = 0; i <= 4; i++) {
    let num = ler.questionFloat("Digite um numero: "+ (i+1) +":");
    numeros.push(num);

   
} 
let nummaior = numeros[0];

for (let i = 0; i < numeros.length; i++) {
   
if (numeros[i] > nummaior) {
    nummaior = numeros[i];
} 
    
}
console.log("O maior número digitado é: " + nummaior);


