import { BibliotecacodiComponent } from './pages/bibliotecacodi/bibliotecacodi.component';
import { VideotutoComponent } from './pages/videotuto/videotuto.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { canActivate } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators';
import { ModuloalgoComponent } from './pages/moduloalgo/moduloalgo.component';
import { AdbicodigosComponent } from './backend/adbicodigos/adbicodigos.component';

const uidAdmin = 'xmPnhsDaBaad8oj6hMXrQaBgHxw1';

const onlyAdmin = () => map((user: any) => !!user && (user.uid === uidAdmin));

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'videotuto', component: VideotutoComponent},
  {path: 'bibliotecacodi', component: BibliotecacodiComponent},
  {path: 'moduloalgo', component: ModuloalgoComponent},
  {path: 'recucontra', loadChildren: () => import('./pages/login/recucontra/recucontra.module')
  .then( m => m.RecucontraPageModule)},
  {path: 'moduloapren', loadChildren: () => import('./pages/moduloapren/moduloapren.module')
  .then( m => m.ModuloaprenPageModule)},
  {path: 'adbicodigos', component: AdbicodigosComponent},
  {path: 'evamoduloalgo', loadChildren: () => import('./backend/evamoduloalgo/evamoduloalgo.module')
  .then( m => m.EvamoduloalgoPageModule), ...canActivate(onlyAdmin)},
  {path: 'preinscritos', loadChildren: () => import('./backend/preinscritos/preinscritos.module')
  .then( m => m.PreinscritosPageModule), ...canActivate(onlyAdmin)},
  {path: 'estudiantes', loadChildren: () => import('./backend/estudiantes/estudiantes.module')
  .then( m => m.EstudiantesPageModule), ...canActivate(onlyAdmin)},
  {path: 'evamodulos', loadChildren: () => import('./backend/evamodulos/evamodulos.module')
  .then( m => m.EvamodulosPageModule), ...canActivate(onlyAdmin)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

