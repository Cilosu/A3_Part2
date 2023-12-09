import { Component, ElementRef } from '@angular/core';

import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import {OCRResult} from "@awesome-cordova-plugins/ocr";
import { Camera, CameraOptions } from "@awesome-cordova-plugins/camera/ngx";

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ocr',
  templateUrl: 'ocr.page.html',
  styleUrls: ['ocr.page.scss']
})
export class OcrPage {

  capturedImage: string = "";
  extractedText: string = "";
  extractionError: string = "";
  logMessage: string = "";

  constructor(private cam : Camera, private ocr: OCR) {}


  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      correctOrientation: true,
      destinationType: this.cam.DestinationType.FILE_URI,
    };

    this.cam.getPicture(options).then(

      (imageData) => {
        this.onSuccess(imageData);
      },
      (error) => this.onFail(error)
    );
  }

  selectPhoto() {
    const srcType = this.cam.PictureSourceType.PHOTOLIBRARY;
    const options = this.setOptions(srcType);

    this.cam.getPicture(options).then(
      (imageData) => {
        this.logMessage = 'Image selected successfully.';
        this.onSuccess(imageData);
      },
      (error) => this.onFail(error)
    );
  }

  setOptions(srcType: number) {
    return {
      quality: 50,
      destinationType: this.cam.DestinationType.FILE_URI,
      sourceType: srcType,
      encodingType: this.cam.EncodingType.JPEG,
      mediaType: this.cam.MediaType.PICTURE,
      correctOrientation: true,
    };
  }


  onSuccess(imageData: string) {
    this.ocr.recText(OCRSourceType.NORMFILEURL, imageData).then(
      (result: OCRResult) => this.onSuccessOCR(result),
      (error) => this.onFailOCR(error)
    );
  }

  onSuccessOCR(result: OCRResult) {
    const allBlocks = result.lines.linetext;
    let allLines = '';

    allBlocks.forEach((element) => {
      allLines = allLines + element + '\n';
    });

    this.extractedText = allLines;
    this.logMessage = 'Text extracted successfully.';
    }


  onFail(error: any) {
    this.logMessage = `Error getting picture: ${error}`;    // Handle error as needed
  }

  onFailOCR(error: any) {
    this.logMessage = `Error recognizing text: ${error.message || 'Unknown error'}`;
  }





  //https://ionicframework.com/docs/v5/native/ocr

  // scanText(){
  //   this.ocr.recText(OCRSourceType.NORMFILEURL, "file://path/to/image.png")
  //     .then((res: OCRResult) => console.log(JSON.stringify(res)))
  //     .catch((error: any) => console.error(error));
  // }

}
