import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatinglistPage } from './floatinglist.page';

const routes: Routes = [
  {
    path: '',
    component: FloatinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatinglistPageRoutingModule {}
