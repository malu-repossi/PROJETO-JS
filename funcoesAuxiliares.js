import salarioMinimo from "./Salario Minimo.js";

function dadosFormatacao (dado){
    let dadoFormatado = dado.toFixed(2).replace(".",",");
    return dadoFormatado;
}

function reajusteSalario (i, salario){
    if(i > 0){
        let salarioAnterior = salarioMinimo[i-1].salario;
        let diferenca = salario - salarioAnterior;
        let percentualCrescimento = (diferenca / salarioAnterior) * 100;
        percentualCrescimento = dadosFormatacao(percentualCrescimento)+'%';

            return percentualCrescimento;
    }
    else {
        let percentualCrescimento = "-";
                
        return percentualCrescimento;
    }
        
    
}

function impressaoSalario (ano, salario){
    let formatacaoSalario = dadosFormatacao(salario);

    console.log("Ano: " + ano);
    console.log("Salário Mínimo: R$" + formatacaoSalario);
}

function impressaoIPCA (ano, ipca){
    let formatacaoIPCA = dadosFormatacao(ipca);

    console.log("Ano: " + ano);
    console.log("Inflação IPCA: " + formatacaoIPCA + "%");
}

function impressaoAmbos (ano, salario, ipca, ajuste){
    let formatacaoSalario = dadosFormatacao(salario);
    let formatacaoIPCA = dadosFormatacao(ipca);

    console.log("Ano: " + ano);
    console.log("Salário Mínimo: R$" + formatacaoSalario);
    console.log("Crescimento Salarial: " + ajuste);
    console.log("Inflação IPCA: " + formatacaoIPCA + "%");

}
                                                  
export {reajusteSalario, impressaoSalario, impressaoIPCA, impressaoAmbos};
