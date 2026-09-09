const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const modal = document.querySelector("#modalResultado");
const fecharModal = document.querySelector("#fecharModal");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value;
  const genero = document.querySelector("#genero").value;
  const audio = document.querySelector("#audio").value;
  const filme = document.querySelector("#filme").value;
  const filmeserie = document.querySelector("#filme-serie").value;
  const canaisapp = document.querySelector("#canais-app").value;

  resultado.textContent = `Obrigado, ${nome}! Você assiste sempre ${filmeserie}, você prefere filmes/séries de ${genero}. Seu canal/aplicativo favorito é ${canaisapp}, seu filme favorito é ${filme} e sua preferência de áudio é ${audio}.`;

  // Abre a janela pra expor os resultados
  modal.showModal();
});

// Fecha a janela quando clicar no botão fechar
fecharModal.addEventListener("click", function () {
  modal.close();
});
