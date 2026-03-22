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
  // calcular o IMC
  const imc = peso / (altura * altura);
  // categorizar o resultado do IMC
  const nivel = [
    'abaixo do peso',
    'peso normal',
    'sobrepeso',
    'obesidade grau 1',
    'obesidade grau 2',
    'obesidade grau 3',
  ];
  // atribuir nível pra categoria
  let categoria;
  if (imc >= 39.9) categoria = nivel[5];
  else if (imc >= 34.9) categoria = nivel[4];
  else if (imc >= 29.9) categoria = nivel[3];
  else if (imc >= 24.9) categoria = nivel[2];
  else if (imc >= 18.5) categoria = nivel[1];
  else categoria = nivel[0];
  //   exibir resultado
  resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, sua categoria é: ${categoria}`;
});
