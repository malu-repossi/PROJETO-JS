import salarioMinimo from "./Salario Minimo";
import inflacao from "./Inflacao";
import {dadosFormatacao, impressao, reajusteSalario} from "./funcoesAuxiliares";

let numero = 0;
let salario = 0;
let ipca = 0;
let percentualCrescimento = 0;

function opcao1 (){
    numero = 1;
    for(let i = 0; i < salarioMinimo.length; i++)
        {
            salario = salarioMinimo[i].salario;
            salario = dadosFormatacao(salario);
               
            impressao(numero, salarioMinimo, salario, ipca, percentualCrescimento);
        }
}

function opcao2(){
    numero = 2;
    for(let i = 0; i < inflacao.length; i++)
        {
            ipca = inflacao[i].ipca;
            ipca = dadosFormatacao(ipca);

            impressao(numero, salarioMinimo, salario, ipca, percentualCrescimento);
        }
}

function opcao3 (){
    numero = 3;
    for(let i = 0; i < salarioMinimo.length; i++)
        {
            salario = salarioMinimo[i].salario;
            ipca = inflacao[i].ipca;
            percentualCrescimento = reajusteSalario(salarioMinimo, salario);
            salario = dadosFormatacao(salario);
            ipca = dadosFormatacao(ipca);

            impressao(numero, salarioMinimo, salario, ipca, percentualCrescimento);   
        }
}

export {opcao1, opcao2, opcao3};