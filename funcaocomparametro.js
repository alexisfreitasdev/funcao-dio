// função com nome atribuido.
function torra(pao, nome){
  console.log("Sua torrada está pronta com " + pao)
  console.log("Ela é um pedido de " + nome)
}

torra("pão integral e pasta de amendoim", "Felipe")

// se não houver nome atribuido  , podemos atribuir um nome padrão na função
function torra(pao, nome = "Cliente"){
    console.log("Sua torrada está pronta com " + pao)
    console.log("Ela é um pedido de " + nome)
}

torra("pão com queijo e bacon")

// atrinbuindo o valor na função "preço"
function torra(pao, nome = "Cliente", valor){
        console.log("Sua torrada está pronta com " + pao)
        console.log("Ela é um pedido de " + nome)
        console.log("O valor total é de " + valor)
}

torra("pão com queijo e bacon " ,"Adrian ", 10.5)