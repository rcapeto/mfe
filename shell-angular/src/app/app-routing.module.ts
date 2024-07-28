import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { remoteEntries } from 'src/utils/remoteEntry';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'mfe1',
    loadChildren: () => import('./modules/mfe1/mfe1.module').then(
      module => module.Mfe1Module,
    )
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: remoteEntries.mfe2.url,
      exposedModule: remoteEntries.mfe2.remoteName.AppChild,
    }).then(module => module.AppChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
