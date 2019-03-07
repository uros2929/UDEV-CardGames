import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-tablic',
  templateUrl: './tablic.component.html',
  styleUrls: ['./tablic.component.scss']
})
export class TablicComponent implements OnInit {

  deckArr;
  player1Arr = [];
  tableArr = [];
  player2Arr = [];

  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    this._deckService.createCardObj();
    this._deckService.shuffleDeck();
    this.deckArr = this._deckService.deck;
    this.firstDeal();
  }

  firstDeal(){
    this.dealCardsForTable();
    this.dealCardsToPlayer1();
    this.dealCardsToPlayer2();
    this.dealCardsToPlayer1();
    this.dealCardsToPlayer2();
  }

  dealCardsToPlayer1() {
    for (let index = 0; index < 3; index++) {
      let newCard = this.deckArr.shift();
      this.player1Arr.push(newCard)
    }
  }
  dealCardsForTable() {
    for (let index = 0; index < 4; index++) {
      let newCard = this.deckArr.shift();
      this.tableArr.push(newCard)
    }
  }
  dealCardsToPlayer2() {
    for (let index = 0; index < 3; index++) {
      let newCard = this.deckArr.shift();
      this.player2Arr.push(newCard)
    }
  }
  cardClicked(event){
    if (event.target.style.border=="") {
      event.target.style.border="3px solid red"
    }else{
      event.target.style.border=""
    }
    console.log(event.target.className)
  }

}
