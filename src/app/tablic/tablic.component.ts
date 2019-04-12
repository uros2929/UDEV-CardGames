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
  player1Clicked=[];
  tableClicked=[];
  player2Clicked=[];
  player2Result;
  tableResult=[];
  
  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    this._deckService.createCardObj();
    this._deckService.shuffleDeck();
    this.deckArr = this._deckService.deck;
    this.firstDeal();
  }
//aaaaaaaa

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

  cardClickedPlayer1(event) {
    if (event.target.style.border == "") {
      event.target.style.border = "5px solid blue"
    } else {
      event.target.style.border = ""
    }
    for (let index = 0; index < this.player1Arr.length; index++) {
      if (this.player1Arr[index].name == event.target.className) {
        this.player1Clicked.push(this.player1Arr[index])
      }
    }
    console.log(this.player1Clicked)
  }

  cardClickedPlayer2(event) {
    if (this.tableClicked.length == 0) {
      return;
    } else {
      if (event.target.style.border == "") {
        event.target.style.border = "5px solid green"
      } else {
        event.target.style.border = ""
      }
      for (let index = 0; index < this.player2Arr.length; index++) {
        if (this.player2Arr[index].name == event.target.className) {
          this.player2Clicked.push(this.player2Arr[index])
        }
      }

      for (let index = 0; index < this.player2Clicked.length; index++) {
        let a = this.player2Clicked[index].value;
        this.player2Result = parseInt(a)
      }
      if (this.tableResult == this.player2Result) {
        alert('bravo')
        for (let index = 0; index < this.player2Arr.length; index++) {
          if (this.player2Arr[index].name == this.player2Clicked[0].name) {
            this.player2Arr.splice(index, 1);
          }
        }
        for (let index = 0; index < this.tableArr.length; index++) {
          for (let i = 0; i < this.tableClicked.length; i++) {
            if (this.tableArr[index].name == this.tableClicked[i].name) {
              let indexArr = [];
              indexArr.push(index)
              for (let c = 0; c < indexArr.length; c++) {
                this.tableArr.splice(indexArr[c], 1);
              }
            }
          }
        }
      }
    }
    this.tableClicked = [];
    this.player2Clicked = [];
  }

  resultOfTableClicked() {
    let a = [];
    for (let index = 0; index < this.tableClicked.length; index++) {
      a.push(this.tableClicked[index].value)
    }
    this.tableResult = a.reduce((a, b) => parseInt(a) + parseInt(b));
  }
}
