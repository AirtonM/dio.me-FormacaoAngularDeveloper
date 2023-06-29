function ligar(heroi){ 
    console.log("Ligando para: " + heroi.telefone);
}

ligar({
    nome: "Airton Marinho",
    vulgo: "Homem de Ferro",
    telefone: "(91) 4002-8922" // Se apagar fica "undefined"
});