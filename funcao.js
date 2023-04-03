import salarioMinimo from "./Salario Minimo.js";
import inflacao from "./Inflacao.js";
import {impressaoSalario, impressaoIPCA, impressaoAmbos, reajusteSalario} from "./funcoesAuxiliares.js";

function opcao1 (){
    for(let i = 0; i < salarioMinimo.length; i++)
        {
            let salario = salarioMinimo[i].salario;

            impressaoSalario(salarioMinimo[i].ano, salario);
        }
}

function opcao2(){
    for(let i = 0; i < inflacao.length; i++)
        {
           let ipca = inflacao[i].ipca;

           impressaoIPCA(inflacao[i].ano, ipca)
        }
}

function opcao3 (){
    for(let i = 0; i < salarioMinimo.length; i++)
        {
            let salario = salarioMinimo[i].salario;
            let ipca = inflacao[i].ipca;
            let ajuste = reajusteSalario(i, salario);

            impressaoAmbos(salarioMinimo[i].ano, salario, ipca, ajuste);
            }
}

export {opcao1, opcao2, opcao3};
