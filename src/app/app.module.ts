import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlackJackComponent } from './black-jack/black-jack.component';
import { TablicComponent } from './tablic/tablic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlackJackComponent,
    TablicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
