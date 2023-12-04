import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { T2sPage } from './t2s.page';

import { T2sPageRoutingModule } from './t2s-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    T2sPageRoutingModule
  ],
  declarations: [T2sPage]
})
export class T2sPageModule {}
