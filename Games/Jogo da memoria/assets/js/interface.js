const FRONT = "cardFront";
const BACK = "cardBack";
const CARD = "card";
const ICON = "icon";

startGame();

function startGame() {
  game.createCards();
  addCardsScreen();
  ClickandPlay();
}

function addCardsScreen() {
  let gameBoard = document.querySelector(".gameBoard");

  for (let tech of game.cards) {
    let card = document.createElement("div"); // Cria a 1ª div com a classe card e adiciona o id dela
    card.classList.add(CARD);
    card.id = tech.id;
    card.setAttribute(ICON, tech.tech);

    let cardFront = document.createElement("div"); // Cria a div com a classe cardFront
    cardFront.classList.add(FRONT);

    let img = document.createElement("img"); // Cria a tag img
    img.src = `./assets/images/${tech.tech}.png`; // Adiciona o src da imagem

    let cardBack = document.createElement("div"); // Cria a div com a classe cardBack
    cardBack.classList.add(BACK);
    cardBack.innerHTML = "&lt;/&gt;"; // Adiciona o texto dentro da div cardBack

    cardFront.appendChild(img); // Adiciona a tag img dentro da div cardFront
    card.appendChild(cardFront); // Adiciona a div cardFront dentro da div card
    card.appendChild(cardBack); // Adiciona a div cardBack dentro da div card
    gameBoard.appendChild(card); // Adiciona a div card dentro da div gameBoard
  }
}

function ClickandPlay() {
  let cards = window.document.getElementsByClassName(CARD);

  for (let card of cards) {
    card.addEventListener("click", played);
  }
}

function played() {
  if (game.setPairCards(this)) {
    this.classList.add("flip");

    if (game.memorySecundCard != null) {
      if (game.checkPair()) {
        game.clear();

        if (game.checkGameOver() == 0) {
          let gameOver = document.getElementById("gameOver");

          gameOver.style.visibility = "visible";

          restart();
        }
      } else {
        let firstCardView = document.getElementById(game.memoryFirstCard.id);

        let secundCardView = document.getElementById(game.memorySecundCard.id);

        setTimeout(() => {
          firstCardView.classList.remove("flip");
          secundCardView.classList.remove("flip");

          game.clearFlipped();
        }, 1000);
      }
    }
  }
}

function restart() {
  let btnRestart = document.getElementsByClassName("btnRestart")[0];

  console.log(btnRestart);

  btnRestart.addEventListener("click", () => {
    location.reload(true);
  });
}
