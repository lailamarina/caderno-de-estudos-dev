//Calculadora de partidas Rankeadas proposta pelo Felipão da DIO

calcularNivelRanked (94, 45)
let saldoDoJogador = calcularNivelRanked (94, 45)

console.log ("O herói tem de saldo " + saldoDoJogador.saldo +" está no nível de " + saldoDoJogador.nivel)

function calcularNivelRanked(vitorias, derrotas) {
    let saldo = vitorias-derrotas
    let nivel = ""
    if (vitorias < 10){
        nivel = "Ferro"
    } 
    else if (vitorias >=10 && vitorias <=20){
        nivel = "Bronze"
    }
    else if (vitorias > 20 && vitorias <=50) {
        nivel = "Prata"
    }
    else if (vitorias > 51 && vitorias <=80){
        nivel = "Ouro"
    }
    else if (vitorias >80 && vitorias <=90){
        nivel = "Diamante"
    }
    else if (vitorias >90 && vitorias <=100){
        nivel = "Lendário"
    }
    else if (vitorias >=101){
        nivel = "Imortal"
    }
    return {saldo, nivel}
}
