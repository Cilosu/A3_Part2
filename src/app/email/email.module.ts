import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailPage } from './email.page';

import { EmailPageRoutingModule } from './email-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EmailPageRoutingModule
  ],
  declarations: [EmailPage]
})
export class EmailPageModule {}
