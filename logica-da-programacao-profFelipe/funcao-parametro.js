//Aprendendo com Felipão da DIO

torrar ("pão de forma","Laila", 7.67)
torrar ("pão integral","Marina" )

function torrar(pao, nome = "Cliente não identificado", valor = "não registrado"){
    console.log("Torrada feita com " + pao)
    console.log("é um pedido de " + nome)
    console.log("O valor total do pedido é R$ " + valor)
}
// Evite gambiarras, o valor opcional sempre ser o ultimo parametro.
