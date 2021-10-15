import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatinglistPageRoutingModule } from './floatinglist-routing.module';

import { FloatinglistPage } from './floatinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatinglistPageRoutingModule
  ],
  declarations: [FloatinglistPage]
})
export class FloatinglistPageModule {}
