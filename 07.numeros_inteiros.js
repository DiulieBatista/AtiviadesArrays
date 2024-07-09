const ler = require('readline-sync');
let numeros=[];
let soma=0;

for (let i = 0; i < 10 ; i++) {
    let num= ler.questionInt("digite 10 numeros ")
    numeros.push(num);

}

console.log("---------------MENU OPÇÕES ----------------------");
console.log(" 1.ORDEM DIRETO \n 2.ORDEM INVERSA  \n 3.TOTAL DOS VALORES \n 0.FINALIZADO");
console.log("-------------------------------------------------");
let opt= ler.questionInt("=>");
switch (opt){
 
    case 1:
        for (let i = 0; i < num.length; i++) {
            console.log(num[i]);
        }   

        break;

    case 2:
        for (let i = num.length -1;i > 0; i--) {
            console.log(num[i]);
        }
            break;
    
    case 3:
        for (let i = 0; i < num.length; i++) {
    
             console.log(`valor ${i} :${num[i]}+`);
            soma += num[i];
        }
             break;
            
    case 0:
      
      break;
                    

    default:
        console.log( "opção invalida ");
        break;
}