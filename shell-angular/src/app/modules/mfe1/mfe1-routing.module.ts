import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterComponent } from 'src/app/components/router/router.component';

const routes: Routes = [
  {
    path: '**',
    component: RouterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }
