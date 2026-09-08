
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const filmeSerie = document.querySelector("#filme-serie").value;
  const nome = document.querySelector("#nome").value;
  const genero = document.querySelector("#genero").value;
  const canaisApp = document.querySelector("#canais-app").value;

  resultado.textContent =
    `Obrigado, ${nome}! Você prefere ${filmeSerie}, do gênero ${genero}, pelo ${canaisApp}.`;

  formulario.reset();
});
