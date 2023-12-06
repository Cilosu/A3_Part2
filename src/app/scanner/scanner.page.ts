import { Component } from '@angular/core';
import {ScannerPageRoutingModule} from "./scanner-routing.module";
import {Device} from '@awesome-cordova-plugins/device/ngx';
import {Network} from '@awesome-cordova-plugins/network/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {AppService} from "../app.service";
@Component({
  selector: 'app-scanner',
  template: `<ion-header [translucent]="true">
    <ion-toolbar>
      <ion-title>
        Scanner
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Scanner</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-button (click)="scanBarcode()">Scan Barcode</ion-button>


  </ion-content>
  `,
  styleUrls: ['scanner.page.scss']
})
export class ScannerPage {


  constructor(private appService: AppService, private network: Network, private device: Device, private barcodeScanner: BarcodeScanner) {}

  getDeviceInfo()
  {
    alert(this.appService.isConnected());
    alert('Device UUID is: ' + this.device.uuid + this.network.type);
  }

  /* scanBarcode - Actions to be performed once a barcode is scanned */
  scanBarcode(){
    this.getDeviceInfo();
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
