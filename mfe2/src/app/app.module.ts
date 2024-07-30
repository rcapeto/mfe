import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardModule } from './modules/card/card.module';
import { MfeCardComponent } from './modules/card/components/mfe-card/mfe-card.component';
import { AppChildModule } from './modules/child/app-child.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    MainComponent,
    MfeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AppChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
