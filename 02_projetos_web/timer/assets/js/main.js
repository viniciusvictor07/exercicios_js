const display = document.getElementById("display");
const iniciarBtn = document.getElementById("iniciar");
const pararBtn = document.getElementById("parar");
const resetarBtn = document.getElementById("resetar");
let segundos = 0;
let minutos = 0;
let intervalId;

function atualizarRelogio() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  let segundosFormatados = String(segundos).padStart(2, "0");
  let minutosFormatados = String(minutos).padStart(2, "0");

  display.textContent = `${minutosFormatados}:${segundosFormatados}`;
}

iniciarBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(atualizarRelogio, 1000);
});

pararBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetarBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  segundos = 0;
  minutos = 0;
  display.textContent = "00:00";
});
