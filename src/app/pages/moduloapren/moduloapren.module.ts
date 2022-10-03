import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloaprenPageRoutingModule } from './moduloapren-routing.module';

import { ModuloaprenPage } from './moduloapren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloaprenPageRoutingModule
  ],
  declarations: [ModuloaprenPage]
})
export class ModuloaprenPageModule {}
