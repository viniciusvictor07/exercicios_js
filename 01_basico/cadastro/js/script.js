function meuEscopo() {
  // selecionar os elementos do formulário e do resultado, criar um array para armazenar as pessoas cadastradas e definir a função que será chamada quando o formulário for enviado
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];
  // função para receber os dados do formulário e armazenar no array pessoas
  function recebeEventoForm(evento) {
    evento.preventDefault();
    // selecionar os campos do formulário e extrair os valores para criar um objeto pessoa
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    // adicionar o objeto pessoa ao array pessoas
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    // exibir os dados da pessoa cadastrada no elemento resultado
    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;

    console.log(pessoas);
  } // adicionar um ouvinte de evento para o formulário que chama a função recebeEventoForm quando o formulário é enviado
  form.addEventListener('submit', recebeEventoForm);
}
// chamar a função meuEscopo para iniciar o processo de cadastro
meuEscopo();
