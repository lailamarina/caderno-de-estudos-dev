// criar uma função em JavaScript que simule o cálculo de preço de um produto APÓS a aplicação de um desconto.

simularDesconto (200.00, 15)
function simularDesconto(precoOriginal, porcentagem) {
    let calculoDesconto = precoOriginal * porcentagem / 100
    let valorFinal =  precoOriginal - calculoDesconto
   
    console.log("O preço original é " + precoOriginal)
    console.log("O desconto aplicado foi de % " + porcentagem)
    console.log("O cálculo de Desconto foi de R$ " + calculoDesconto)
    console.log ("O valor final do produto com desconto é de R$ " + valorFinal)
}

