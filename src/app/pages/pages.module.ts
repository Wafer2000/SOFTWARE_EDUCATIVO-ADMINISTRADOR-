import { ModuloalgoComponent } from './moduloalgo/moduloalgo.component';
import { BibliotecacodiComponent } from './bibliotecacodi/bibliotecacodi.component';
import { VideotutoComponent } from './videotuto/videotuto.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LoginComponent,
    BibliotecacodiComponent,
    VideotutoComponent,
    ModuloalgoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ]
})
export class PagesModule { }
