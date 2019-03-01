import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  deckArr;

  constructor(private _deckService:DeckService) { }

  ngOnInit() {
   this._deckService.createCardObj();
   this.deckArr=this._deckService.deck;
  }
  shuffleDeck(){
    this._deckService.shuffleDeck();  // JUST TRY 
  }






}
