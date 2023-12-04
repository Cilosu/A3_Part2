import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecordPage } from './record.page';

import { RecordPageRoutingModule } from './record-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecordPageRoutingModule
  ],
  declarations: [RecordPage]
})
export class RecordPageModule {}
