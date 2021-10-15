import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingfabPageRoutingModule } from './floatingfab-routing.module';

import { FloatingfabPage } from './floatingfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingfabPageRoutingModule
  ],
  declarations: [FloatingfabPage]
})
export class FloatingfabPageModule {}
