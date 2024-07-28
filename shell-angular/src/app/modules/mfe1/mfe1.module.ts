import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterComponent } from 'src/app/components/router/router.component';
import { Mfe1RoutingModule } from './mfe1-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Mfe1RoutingModule,
  ],
  bootstrap: [RouterComponent]
})
export class Mfe1Module { }
