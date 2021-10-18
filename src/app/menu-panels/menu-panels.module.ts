import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPanelsPageRoutingModule } from './menu-panels-routing.module';

import { MenuPanelsPage } from './menu-panels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPanelsPageRoutingModule
  ],
  declarations: [MenuPanelsPage]
})
export class MenuPanelsPageModule {}
