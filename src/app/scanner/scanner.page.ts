import { Component } from '@angular/core';
import {ScannerPageRoutingModule} from "./scanner-routing.module";
import {Device} from '@awesome-cordova-plugins/device/ngx';
import {Network} from '@awesome-cordova-plugins/network/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {AppService} from "../app.service";
@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss']
})
export class ScannerPage {

  constructor(private barcodeScanner: BarcodeScanner) {}

  //setting a variable with an any type
  scannedBarcode: any;

  /* function called scanBarcode with no parameters, and has a void type - Once Barcode is scanned, the barcode details
      will show on the page using interpolation */
  scanBarcode(): void{
    this.barcodeScanner.scan().then(barcodeData => {

      this.scannedBarcode = barcodeData.text;   //assigning barcodeData.text (converts the scanned barcode object to text) to scannedBarcode.

      //console.log("Barcode data " + barcodeData.text);  //unnecessary as we cant use web dev tools in app

      //Change the catch/error?????
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
