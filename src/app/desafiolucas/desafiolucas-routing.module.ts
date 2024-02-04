import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafiolucasPage } from './desafiolucas.page';

const routes: Routes = [
  {
    path: '',
    component: DesafiolucasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafiolucasPageRoutingModule {}
