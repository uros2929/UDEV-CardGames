import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.scss']
})
export class BlackJackComponent implements OnInit {

  deckArr;
  computerCardsArr = [];
  playerCardsArr = ['aa'];
  newArrOfPlayerValues = [];
  playerResult = 0;
  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    this._deckService.createCardObj();

  }

  shuffleDeck() {
    this._deckService.shuffleDeck();
    this.deckArr = this._deckService.deck;
  }
  dealCardToPlayer() {
   if (this.deckArr==undefined) {
     alert('Shuffle deck please !')
     return;
   }
    let newCard = this.deckArr.shift();
    this.playerCardsArr.push(newCard);
    this.newArrOfPlayerValues = [];
    this.resultOfPlayersCards();
    this.getPlayerResult();
    this.playerLose();
    this.playerWin();
  }

  resultOfPlayersCards() {
    for (let index = 1; index < this.playerCardsArr.length; index++) {
      this.newArrOfPlayerValues.push(Object.values(this.playerCardsArr[index])[2])
    }
  }

  getPlayerResult() {
    let totalResultOfPlayer = this.newArrOfPlayerValues.reduce((a, b) => parseInt(a) + parseInt(b));
    this.playerResult = totalResultOfPlayer;
  }
  playerLose() {
    if (this.playerResult > 21) {
      alert('Computer win');
      setTimeout(() => {
        this.playerCardsArr = ['aa'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
      }, 1000)
    }
  }
  playerWin(){
    if (this.playerResult == 21) {
      alert('BlackJack, you win !');
      setTimeout(() => {
        this.playerCardsArr = ['aa'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
      }, 1000)
    }
  }

}
