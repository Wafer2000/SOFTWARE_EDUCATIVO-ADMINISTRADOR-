import { Modulo1Component } from './../temas/modulo1/modulo1.component';
import { Modulo2Component } from './../temas/modulo2/modulo2.component';
import { Modulo3Component } from './../temas/modulo3/modulo3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemasPageRoutingModule } from './temas-routing.module';

import { TemasPage } from './temas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemasPageRoutingModule
  ],
  declarations: [TemasPage, Modulo1Component, Modulo2Component, Modulo3Component]
})
export class TemasPageModule {}
