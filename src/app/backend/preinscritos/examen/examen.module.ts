import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenPageRoutingModule } from './examen-routing.module';

import { ExamenPage } from './examen.page';
import { OpcionesComponent } from 'src/app/components/opciones/opciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenPageRoutingModule,
  ],
  declarations: [ExamenPage, OpcionesComponent]
})
export class ExamenPageModule {}
