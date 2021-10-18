import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPanelsPage } from './menu-panels.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPanelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPanelsPageRoutingModule {}
