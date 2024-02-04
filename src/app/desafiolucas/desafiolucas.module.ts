import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafiolucasPageRoutingModule } from './desafiolucas-routing.module';

import { DesafiolucasPage } from './desafiolucas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafiolucasPageRoutingModule
  ],
  declarations: [DesafiolucasPage]
})
export class DesafiolucasPageModule {}
