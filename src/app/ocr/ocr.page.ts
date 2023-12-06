import { Component } from '@angular/core';

import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import {OCRResult} from "@awesome-cordova-plugins/ocr";

@Component({
  selector: 'app-ocr',
  templateUrl: 'ocr.page.html',
  styleUrls: ['ocr.page.scss']
})
export class OcrPage {

  constructor(private ocr: OCR) {}

  //https://ionicframework.com/docs/v5/native/ocr

  scanText(){
    this.ocr.recText(OCRSourceType.NORMFILEURL, "file://path/to/image.png")
      .then((res: OCRResult) => console.log(JSON.stringify(res)))
      .catch((error: any) => console.error(error));
  }

}
