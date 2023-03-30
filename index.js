import { opcao1, opcao2, opcao3 } from './funcao';
const input = require('readline-sync');

console.log("Suas opções: \n")
console.log("1 - Listar os salários minímos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n")

escolha = input.question("Digite a opção escolhida:");
escolha = Number(escolha);

switch (escolha){
    case 1:
        opcao1;
        break;
    case 2:
        opcao2;
        break;
    case 3:        
        opcao3;
        break;
    default: 
        console.log("Opção Inválida!");
        break;
}    

