import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloaprenPage } from './moduloapren.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloaprenPage,
    children: [
      {path: 'temas', loadChildren: () => import('./temas/temas.module')
      .then( m => m.TemasPageModule)},
      {path: 'evaluaciones', loadChildren: () => import('./evaluaciones/evaluaciones.module')
      .then( m => m.EvaluacionesPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloaprenPageRoutingModule {}
