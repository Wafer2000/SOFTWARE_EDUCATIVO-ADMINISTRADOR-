import { OpexamoduloComponent } from './../../../components/opexamodulo/opexamodulo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionesPageRoutingModule } from './evaluaciones-routing.module';

import { EvaluacionesPage } from './evaluaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluacionesPageRoutingModule
  ],
  declarations: [EvaluacionesPage, OpexamoduloComponent]
})
export class EvaluacionesPageModule {}
