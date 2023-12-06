import { Component } from '@angular/core';
import {ScannerPageRoutingModule} from "./scanner-routing.module";

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss']
})
export class ScannerPage {

  constructor(private barcodeScanner: BarcodeScanner) {}

  scanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
