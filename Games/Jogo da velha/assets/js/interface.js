document.addEventListener("DOMContentLoaded", () => {
  const squares = window.document.querySelectorAll(".square");

  for (let square of squares) {
    square.addEventListener("click", handleSquare);
  }
});

function handleSquare(element) {
  let square = element.target; // Variavél square recebe o square clicado

  if (joga(square.id)) {
    let div = document.createElement("div");
    div.className = jogadores[jogadorDaVez]; // Cria a div que marca 'x' ou 'o' no jogo
    square.appendChild(div);

    if (verificaColunas() || verificaLinhas() || verificaDiagonais()) {

        setTimeout(() => {
            let fimJogo = document.getElementById("fimJogo");

            fimJogo.style.visibility = "visible";

            let aviso = document.getElementById("telaAviso");

            aviso.innerHTML = `Parabéns! jogador "${jogadores[jogadorDaVez]}" venceu!`;

            let restart = document.getElementById("jogarNovamente");

            restart.addEventListener("click", () => location.reload(true));
        }, 200);
        
    }

    if (nJogadas == 9) {

        setTimeout(() => {
            let fimJogo = document.getElementById("fimJogo");

            fimJogo.style.visibility = "visible";

            let aviso = document.getElementById("telaAviso");

            aviso.innerHTML = `O jogo terminou empatado!`;

            let restart = document.getElementById("jogarNovamente");

            restart.addEventListener("click", () => location.reload(true));
        }, 200);
        }
    }
}
