import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './paciente/list/list.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { EcgComponent } from './paciente/ecg/ecg.component';
import { HomeComponent } from './paciente/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'lista',
    component: ListComponent
  },
  {
    path: 'ecg/:id',
    component: EcgComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
