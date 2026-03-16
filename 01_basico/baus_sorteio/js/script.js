while (true) {
  //   perguntar ao usuário quantos baús deseja abrir
  try {
    let bausQuantia = Number(
      prompt(
        'Digite a quantidade báus que você quer abrir (min: 1. max: 10): ',
      ),
    );
    // validar se o input é um número
    if (isNaN(bausQuantia)) {
      throw new Error('Isso não é um número!');
    }
    // validar se a quantidade está entre 1 e 10
    if (bausQuantia < 1 || bausQuantia > 10) {
      throw new Error('Escolhe um valor entre 1 e 10!');
    }
    // gerar número aleatório entre 1 e 3 pra cada baú
    for (let i = 0; i < bausQuantia; i++) {
      const bauValor = Math.floor(Math.random() * 3) + 1;
      // condições do baú
      if (bauValor === 1) {
        alert(`${i + 1}ª Baú: Você achou uma Erva!`);
      }
      if (bauValor === 2) {
        alert(`${i + 1}ª Baú: Você achou Munição!`);
      }
      if (bauValor === 3) {
        alert(`${i + 1}ª Baú: O baú estava amaldiçoado!`);
      }
    }
    break;
    // exibição de erro
  } catch (erro) {
    alert(`ERRO: ${erro.message}`);
  }
}
