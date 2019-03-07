import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {




  constructor() { }

  ngOnInit() {
    window.addEventListener("click",(event)=>{
     if (event.srcElement.id=="blackJackGameInfoModal") {
      document.getElementById('blackJackGameInfoModal').style.display='none';
     }
     if (event.srcElement.id=="tablicGameInfoModal") {
      document.getElementById('tablicGameInfoModal').style.display='none';
     }
    })
  }

  showModalGameInfoBlackJack(){
    document.getElementById('blackJackGameInfoModal').style.display='grid';
  }
  showModalGameInfoTablic(){
    document.getElementById('tablicGameInfoModal').style.display='grid';
  }





}
