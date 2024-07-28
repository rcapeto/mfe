import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './modules/card/components/card/card.component';
import { AppChildModule } from './modules/child/app-child.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppChildModule,
  ],
  providers: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
