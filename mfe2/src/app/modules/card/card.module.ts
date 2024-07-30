import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfeCardComponent } from './components/mfe-card/mfe-card.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  bootstrap: [MfeCardComponent]
})
export class CardModule { }
