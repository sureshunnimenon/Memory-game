const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard =false;
let lockedBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockedBoard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;}
  else {
    hasFlippedCard = false; 
    secondCard = this;
    console.log(firstCard.dataset.name, secondCard.dataset.name);
    if (firstCard.dataset.name === secondCard.dataset.name){
      // it is a match
      firstCard.removeEventListener('click',flipCard);
      secondCard.removeEventListener('click', flipCard);
    }
    else{
      // restore flipped cards
      lockedBoard = true;
      setTimeout(() => {firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      lockedBoard = false;  },500);
          
    }
  }  
} 
cards.forEach(card => card.addEventListener('click', flipCard));