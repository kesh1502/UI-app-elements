import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingactionbuttonPageRoutingModule } from './floatingactionbutton-routing.module';

import { FloatingactionbuttonPage } from './floatingactionbutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingactionbuttonPageRoutingModule
  ],
  declarations: [FloatingactionbuttonPage]
})
export class FloatingactionbuttonPageModule {}
