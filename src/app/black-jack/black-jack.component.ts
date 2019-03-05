import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.scss']
})

export class BlackJackComponent implements OnInit {

  deckArr;
  computerCardsArr = ['start'];
  playerCardsArr = ['start'];
  newArrOfPlayerValues = [];
  newArrOfComputerValues = [];
  playerResult = 0;
  computerResult = 0;
  playerCoins = 10000;
  betValue=100;
  

  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    this._deckService.createCardObj();
  }

  shuffleDeck() {
    this._deckService.shuffleDeck();
    this.deckArr = this._deckService.deck;
  }
  firstDeal() {
 
    if (this.deckArr == undefined) {
      alert('Shuffle deck please !')
      return;
    }
    if (this.deckArr.length < 4) {
      this._deckService.createCardObj();
      this.shuffleDeck()
    }
    this.setBet();
    this.dealToPlayer();
    this.dealToComputer();
    this.dealToPlayer();
    this.dealToComputer();
    this.resultOfPlayersCards();
    this.resultOfComputerCards();
    this.getPlayerResult();
    this.getComputerResult();
    this.getDocById('playerButtons', 'block');
    this.getDocById('playerDeal', 'block');
    this.getDocById('btnFirstDeal', 'none');
    this.getDocById('shuffleDeck', 'none');
    this.playerLose();
    this.playerWin();
    this.computerWin();

  }

  dealToPlayer() {
    let newCardPlayer = this.deckArr.shift();
    this.playerCardsArr.push(newCardPlayer);
  }
  dealToComputer() {
    let newCardComp = this.deckArr.shift();
    this.computerCardsArr.push(newCardComp)
  }

  dealCardToPlayer() {
    if (this.deckArr.length < 4) {
      this._deckService.createCardObj();
      this.shuffleDeck()
    }
    let newCard = this.deckArr.shift();
    this.playerCardsArr.push(newCard);
    this.newArrOfPlayerValues = [];
    this.resultOfPlayersCards();
    this.getPlayerResult();
    this.playerLose();
    this.playerWin();
  }

  resultOfComputerCards() {
    for (let index = 1; index < this.computerCardsArr.length; index++) {
      this.newArrOfComputerValues.push(Object.values(this.computerCardsArr[index])[2])
    }
    for (let index = 0; index < this.newArrOfComputerValues.length; index++) {
      if (this.newArrOfComputerValues[index] > 11) {
        this.newArrOfComputerValues[index] = 10;
      }
    }
  }

  resultOfPlayersCards() {
    for (let index = 1; index < this.playerCardsArr.length; index++) {
      this.newArrOfPlayerValues.push(Object.values(this.playerCardsArr[index])[2])
    }
    for (let index = 0; index < this.newArrOfPlayerValues.length; index++) {
      if (this.newArrOfPlayerValues[index] > 11) {
        this.newArrOfPlayerValues[index] = 10;
      }
    }
  }

  getComputerResult() {
    let totalResultOfComputer = this.newArrOfComputerValues.reduce((a, b) => parseInt(a) + parseInt(b));
    this.computerResult = totalResultOfComputer;
  }

  getPlayerResult() {
    let totalResultOfPlayer = this.newArrOfPlayerValues.reduce((a, b) => parseInt(a) + parseInt(b));
    this.playerResult = totalResultOfPlayer;
  }

  playerLose() {
    if (this.playerResult > 21) {
      alert('Computer win');
      setTimeout(() => {
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
      }, 1500)
    }
  }
  playerWin() {
    if (this.playerResult == 21) {
      alert('BlackJack, you win !');
      setTimeout(() => {
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
        this.playerCoins += this.betValue * 2
      }, 1500)
    }
  }
  computerWin(){
    if (this.computerResult == 21) {
      alert('BlackJack, computer win !');
      setTimeout(() => {
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
      }, 1500)
    }
  }
  playerHold() {
    this.getDocById('playerDeal', 'none');

      if (this.computerResult < this.playerResult) {
        this.dealToComputer();
        this.newArrOfComputerValues = [];
        this.resultOfComputerCards();
        this.getComputerResult();
       }
    if (this.computerResult==21) {
      alert('BlackJack, computer win !');
      setTimeout(()=>{
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
      },1500)
    }
    if (this.computerResult>21) {
      alert('Player win !');
      setTimeout(()=>{
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
        this.playerCoins += this.betValue * 2
      },1500)
    }
    if (this.computerResult>this.playerResult && this.computerResult<21) {
      alert('Computer win !');
      setTimeout(()=>{
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
      },1500)
    }
    if (this.computerResult==this.playerResult) {
      alert('Draw !');
      setTimeout(()=>{
        this.playerCardsArr = ['start'];
        this.newArrOfPlayerValues = [];
        this.playerResult = 0;
        this.computerCardsArr = ['start']
        this.newArrOfComputerValues = [];
        this.computerResult = 0;
        this.getDocById('playerButtons', 'none');
        this.getDocById('btnFirstDeal', 'block');
        this.playerCoins += this.betValue
      },1500)
    }
  }

  getDocById(id, val) {
    document.getElementById(id).style.display = val
  }

  setBet() {
    let betValue=
    this.playerCoins -= this.betValue;
  }
}
