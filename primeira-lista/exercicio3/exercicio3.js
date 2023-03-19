function retornaMensagem(idade) {
  if (!idade || isNaN(idade)) return "Você precisa responder a pergunta!";

  if (idade > 0 && idade < 16) {
    return "Você é muito jovem para estar aqui";
  }

  if (idade <= 18) {
    return "Não é permitido consumir bebidas alcoólicas";
  }

  if (idade <= 75) {
    return "Pode entrar";
  }

  if (idade >= 75) {
    return "Beba com moderação";
  }
}

function verificaIdade() {
  var idade = Number(prompt("Digite sua idade:"));
  const mensagem = retornaMensagem(idade)

  alert(mensagem);

  if (mensagem === "Você precisa responder a pergunta!") {
    verificaIdade();
  }
}

verificaIdade();
