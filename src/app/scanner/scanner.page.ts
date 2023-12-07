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

    <p>Scanned Barcode details: {{ scannedBarcode }}</p> <!--  interpolation. getting the data that is scanned  -->


  </ion-content>
  `,
  styleUrls: ['scanner.page.scss']
})
export class ScannerPage {


  constructor(private appService: AppService, private network: Network, private device: Device, private barcodeScanner: BarcodeScanner) {}

  getDeviceInfo()
  {
    alert("Device connected to the network: " + this.appService.isConnected());
    alert('Device UUID is: ' + this.device.uuid + " Network Type: " + this.network.type);
  }

  scannedBarcode: any; //setting a variable with an any type

  /* scanBarcode - Once Barcode is scanned, the barcode details will show on the page using interpolation */
  scanBarcode(){
    this.getDeviceInfo(); //
    this.barcodeScanner.scan().then(barcodeData => {

      this.scannedBarcode = barcodeData.text;   //assigning barcodeData.text (converts the scanned barcode object to text) to scannedBarcode.

      console.log("Barcode data " + barcodeData.text);

      //Change the catch/error????
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
