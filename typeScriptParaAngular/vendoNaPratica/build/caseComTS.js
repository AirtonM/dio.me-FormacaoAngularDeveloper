"use strict";
function ligarPara(heroi) {
    console.log("Ligando para: " + heroi.telefone);
}
ligarPara({
    nome: "Airton Marinho",
    vulgo: "Homem de Ferro",
    telefone: "(91) 4002-8922", // Se apagar ele te diz logo que precisa colocar a variável telefone que está declarado lá na tipagem
});
