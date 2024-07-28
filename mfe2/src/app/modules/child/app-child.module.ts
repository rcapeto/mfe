import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { AppChildRoutingModule } from './app-child-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppChildRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppChildModule { }
