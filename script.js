const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value;
  const genero = document.querySelector("#genero").value;
  const audio = document.querySelector("#audio").value;
  const filme = document.querySelector("#filme").value;
  const filmeSerie = document.querySelector("#filme-serie").value;
  const canaisApp = document.querySelector("#canais-app").value;

  resultado.textContent = `Obrigado, ${nome}! Você prefere ${filmeSerie}, seu gênero favorito é ${genero}. 
Seu canal/aplicativo favorito é ${canaisApp}, seu filme/série favorito(a) é ${filme} e sua preferência de áudio é ${audio}.`;

  formulario.reset();
});
