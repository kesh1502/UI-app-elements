import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSplitPanePageRoutingModule } from './menu-split-pane-routing.module';

import { MenuSplitPanePage } from './menu-split-pane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSplitPanePageRoutingModule
  ],
  declarations: [MenuSplitPanePage]
})
export class MenuSplitPanePageModule {}
