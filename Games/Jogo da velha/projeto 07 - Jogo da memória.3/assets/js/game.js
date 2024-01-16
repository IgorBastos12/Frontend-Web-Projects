const game = {

  lockMode: false,
  memoryFirstCard: null,
  memorySecundCard: null,

  

  techs: [
          'bootstrap', 'css', 
          'electron', 'firebase', 
          'html', 'javascript', 
          'jquery', 'mongo', 
          'node', 'react'
        ],


  cards: null,



  createCards: function  () {       // Método que gera as cartas já embaralhadas

    this.cards = [];  //adiciono um array para propriedade cards

    for(let tech of this.techs) {

      this.cards.push(this.CardInformation(tech));  // Para cada tech geramos um array com 2 objetos dentro com informações da tech, essas informações serão as informações da carta, e adicionamos esse array no array na propriedade cards

    }

    this.cards = this.cards.flatMap(pair => pair)    // flapMap desmembra os arrays que tem outros arrays dentro, com isso nossa propriedade cards recebe apenas o novo array desmembrado 
    
    this.shuffleCards();  // Após isso chamamos nosso método para embaralhar carta,  ele pega o novo array demebrado de cards e mistura os elementos.


    console.log(this.cards);

  },


  CardInformation: function  (tech) {  // Método que gera as informações do par de cartas

    pairCards = [{
      id:this.createId(tech),
      tech: tech,
      flipped: false

    },{
      id: this.createId(tech),
      tech: tech,
      flipped: false

    }];
    return pairCards;
  },

  createId: function (tech) {  // Método que gera os ids das cartas

    let id = tech + parseInt(Math.random() * 10000);
    
    return id;

  },

  shuffleCards: function () {  // Método que embaralha as cartas

    let indexArray = 0;
    

    for (indexArray = 0; indexArray < this.cards.length; indexArray++ ) {

      let randomIndex = Math.floor(Math.random() * 20);  // Gera um num aleátorio entre 0 e 19

      [this.cards[indexArray], this.cards[randomIndex]] = [this.cards[randomIndex],this.cards[indexArray]]
    }

  },

  played: function (e) {

    if(this.setPairCards(e)){

      if(this.checkPair()) {

        
        return  true;

      } else {
        
        return false;
      }
    }


  },

  
  setPairCards: function(e){

    let setCard = this.cards.filter(card => card.id == e.id)[0];


    if(this.memoryFirstCard == null) {
      this.memoryFirstCard = setCard;

    } else {
      this.memorySecundCard = setCard;
      this.lockMode = true;
  
      return true;
      
    }

    
  }, 

  checkPair:  function () {

    return this.memoryFirstCard.tech == this.memorySecundCard.tech;
  },

  clearMemory: function () {

    this.memoryFirstCard == null;
    this.memorySecundCard == null;
    this.lockMode == false;
  }



}

