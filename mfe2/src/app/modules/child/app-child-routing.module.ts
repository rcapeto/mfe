import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { Page1Component } from 'src/app/pages/page1/page1.component';
import { Page2Component } from 'src/app/pages/page2/page2.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppChildRoutingModule { }
