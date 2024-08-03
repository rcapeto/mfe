import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mfe2', pathMatch: 'prefix' },
  {
    path: 'mfe2',
    loadChildren: () => import('./modules/child/app-child.module').then(
      module => module.AppChildModule,
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
