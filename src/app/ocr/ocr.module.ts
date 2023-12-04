import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OcrPage } from './ocr.page';

import { OcrPageRoutingModule } from './ocr-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OcrPageRoutingModule
  ],
  declarations: [OcrPage]
})
export class OcrPageModule {}
