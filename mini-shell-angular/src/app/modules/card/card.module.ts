import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [CardComponent]
})
export class CardModule { }
