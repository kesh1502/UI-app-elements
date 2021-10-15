import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingactionbuttonPage } from './floatingactionbutton.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingactionbuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingactionbuttonPageRoutingModule {}
