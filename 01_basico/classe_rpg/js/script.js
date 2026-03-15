const personagem = {
  nome: prompt('Digite o nome do seu personagem: ').trim(),
  level: Number(prompt('Em que nível ele está? ')),
  classe: prompt('Qual a classe dele? ').trim().toLowerCase(),
  energia: 10,
  atacar() {
    this.energia -= 2;
    alert(`${this.nome} usou um ataque de ${this.classe}!`);
    alert(`energia caiu para ${this.energia}!`);
  },
};

if (personagem.level >= 10) {
  alert(`O ${personagem.nome} é um ${personagem.classe} veterano!`);
} else {
  alert(`O ${personagem.nome} ainda é um recruta.`);
}

while (personagem.energia > 0) {
  let ataqueEscolha = prompt('Deseja atacar? [s/n]: ').trim().toLowerCase();

  if (ataqueEscolha !== 's') break;

  personagem.atacar();

  if (personagem.energia === 0) {
    alert('Sua energia acabou!');
  }
}

alert('Fim de jogo!');
