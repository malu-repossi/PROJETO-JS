
function dadosFormatacao (dado){
    let dadoFormatado = dado.toFixed(2).replace(".",",");
    return dadoFormatado;
}

function reajusteSalario (salarioMinimo, salario){
    for(let i = 0; i < salarioMinimo.length; i++){
        if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior;
                let percentualCrescimento = (diferenca / salarioAnterior) * 100;
                percentualCrescimento = dadosFormatacao(percentualCrescimento)+'%';

                return percentualCrescimento;
            }
            else
            {
                percentualCrescimento = "-";
                
                return percentualCrescimento;
            }
    }

}

function impressao (numero, salarioMinimo, salario, ipca, percentualCrescimento){
    for(let i = 0; i < salarioMinimo.length; i++){
        console.log('\n');
        console.log("Ano: " + salarioMinimo.ano);
        if(numero == 1){
            console.log("Salário Mínimo: " + salario);
        }
        else if (numero == 2){
            console.log("Inflação IPCA: " + ipca);
        }
        else {
            console.log("Salário Mínimo: " + salario);
            console.log("Crescimento Salarial: " + percentualCrescimento);
            console.log("Inflação IPCA: " + ipca + "%");
        }
    }
}


export {dadosFormatacao, reajusteSalario, impressao};