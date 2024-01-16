const FRONT = 'cardFront';
const BACK = 'cardBack';
const CARD = 'card';
const ICON = 'icon'

startGame();


function startGame() {

    game.createCards();
    addCardsScreen();
    ClickandPlay()
    
}


function addCardsScreen() {

    let gameBoard = document.querySelector('.gameBoard');

    for (let tech of game.cards) {


        let card = document.createElement('div');       // Cria a 1ª div com a classe card e adiciona o id dela
        card.classList.add(CARD);
        card.id = tech.id;
        card.setAttribute(ICON, tech.tech);
        

        let cardFront = document.createElement('div');   // Cria a div com a classe cardFront
        cardFront.classList.add(FRONT);
        
        let img = document.createElement('img');       // Cria a tag img
        img.src = `./assets/images/${tech.tech}.png`; // Adiciona o src da imagem

        let cardBack = document.createElement('div');   // Cria a div com a classe cardBack
        cardBack.classList.add(BACK);
        cardBack.innerHTML = '&lt;/&gt;';       // Adiciona o texto dentro da div cardBack



        cardFront.appendChild(img);       // Adiciona a tag img dentro da div cardFront 
        card.appendChild(cardFront);     // Adiciona a div cardFront dentro da div card
        card.appendChild(cardBack);     // Adiciona a div cardBack dentro da div card
        gameBoard.appendChild(card);   // Adiciona a div card dentro da div gameBoard

    }

}

function ClickandPlay() {

    let cards = window.document.getElementsByClassName(CARD);

    for (let card of cards) {
        card.addEventListener('click' , () => {
            
            if(game.lockMode == false){
                card.classList.add('flip');
                game.setPairCards(card);
            
            }
            
            if (game.lockMode == true) {

                if(game.checkPair() == false) {


                    setTimeout(() => {
                        
                        let firstCardView = document.getElementById(game.memoryFirstCard.id);
                        let secundCardView = document.getElementById(game.memorySecundCard.id);

                        firstCardView.classList.remove('flip');
                        secundCardView.classList.remove('flip');

                        game.clear();

                    }, 1000);
                    
                    
                
                } else {


                    game.clear();
                }
            }

                        
        });
    }   

}




