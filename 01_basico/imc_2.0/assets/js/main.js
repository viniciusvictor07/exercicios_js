function meuEscopo() {
  // função categorizar o resultado do IMC
  function getNivelImc(imc) {
    const nivel = [
      'abaixo do peso',
      'peso normal',
      'sobrepeso',
      'obesidade grau 1',
      'obesidade grau 2',
      'obesidade grau 3',
    ];
    // atribuir nível pra categoria
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    return nivel[0];
  }
  // função calcular o IMC
  function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }
  // atribuir o formulário e o resultado a variáveis
  const formulario = document.getElementById('formulario');
  const resultado = document.getElementById('resultado');
  // adicionar um ouvinte de evento para o envio do formulário
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    // obter os valores dos campos de entrada
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    // converter os valores para números, substituindo vírgulas por pontos
    const peso = Number(inputPeso.value.replace(',', '.'));
    let altura = Number(inputAltura.value.replace(',', '.'));
    // validar os valores de peso e altura
    if (!peso) {
      resultado.innerHTML = 'Peso inválido';
      return;
    }
    if (!altura) {
      resultado.innerHTML = 'Altura inválida';
      return;
    }
    // ajustar a altura para metros, caso seja informada em centímetros
    if (altura > 3) {
      altura = altura / 100;
    }
    // chamar a função getImc
    const imc = getImc(peso, altura);
    // chamar a função getNivelImc
    const nivelImc = getNivelImc(imc);
    //   exibir resultado
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, sua categoria é: ${nivelImc}`;
    formulario.reset();
  });
}
meuEscopo();
