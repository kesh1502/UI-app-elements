import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingfabPage } from './floatingfab.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingfabPageRoutingModule {}
