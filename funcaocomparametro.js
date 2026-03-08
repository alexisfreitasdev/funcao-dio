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