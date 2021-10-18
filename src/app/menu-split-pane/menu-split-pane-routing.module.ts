import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSplitPanePage } from './menu-split-pane.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSplitPanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSplitPanePageRoutingModule {}
