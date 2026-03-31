const ps = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

ps.forEach((valor) => {
  valor.style.backgroundColor = backgroundBody;
  valor.style.color = 'white';
});
