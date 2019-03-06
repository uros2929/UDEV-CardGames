import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck = [];
  values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '11'];
  suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
  
  constructor() { }

  createCard(valueP, suitP) {
    let nameOfCard = valueP + "of" + suitP,
      suitOfCard = suitP,
      valueOfCard = valueP

    return { name: nameOfCard, suit: suitOfCard, value: valueOfCard }
  }

  createCardObj() {

    for (let s = 0; s < this.suits.length; s++) {
      for (let v = 0; v < this.values.length; v++) {
        this.deck.push(this.createCard(this.values[v], this.suits[s]))
      }
    }
  }
  shuffleDeck() {
    let currentIndex = this.deck.length;

    while (0 !== currentIndex) {
      let randInd = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let tempVal = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randInd];
      this.deck[randInd] = tempVal;
    }
    return this.deck
  }
}
