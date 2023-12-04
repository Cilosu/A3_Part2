import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompassPage } from './compass.page';

import { CompassPageRoutingModule } from './compass-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CompassPageRoutingModule
  ],
  declarations: [CompassPage]
})
export class CompassPageModule {}
