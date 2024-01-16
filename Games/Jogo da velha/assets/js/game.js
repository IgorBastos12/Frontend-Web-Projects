var game = ["", "", "", "", "", "", "", "", ""];
var jogadores = ["x", "o"];
var jogadorDaVez = 1;
var nJogadas = 0;

function joga(nSquare) {
  if (game[nSquare] == "") {

    game[nSquare] = jogadores[jogadorDaVez];

    mudarJogador(jogadorDaVez);

    nJogadas++;

    return true;

  } else {
    
    window.alert("Jogada Inválida!");

    return false;

  }
}

function mudarJogador() {
  if (jogadorDaVez == 1) {
    jogadorDaVez = 0;
  } else {
    jogadorDaVez = 1;
  }
}

function verificaLinhas() {
  for (let i = 0; i < 3; i++) {
    if (game[i * 3] != "" && game[i * 3 + 1] != "" && game[i * 3 + 2] != "") {
      if (
        game[i * 3] == game[i * 3 + 1] &&
        game[i * 3 + 1] == game[i * 3 + 2]
      ) {
        return true;
      }
    }
  }

  return false;
}

function verificaColunas() {
  for (let i = 0; i < 3; i++) {
    if (game[i] != "" && game[i + 3] != "" && game[i + 6] != "") {
      if (game[i] == game[i + 3] && game[i + 3] == game[i + 6]) {
        return true;
      }
    }
  }

  return false;
}

function verificaDiagonais() {
  if (
    (game[0] != "" && game[4] != "" && game[8] != "") ||
    (game[2] != "" && game[4] != "" && game[6] != "")
  ) {
    if (
      (game[0] == game[4] && game[4] == game[8]) ||
      (game[2] == game[4] && game[4] == game[6])
    ) {
      return true;
    }
  } else {
    return false;
  }
}
