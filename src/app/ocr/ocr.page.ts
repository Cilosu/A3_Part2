import { Component } from '@angular/core';

import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import {OCRResult} from "@awesome-cordova-plugins/ocr";
import { Camera, CameraOptions } from "@awesome-cordova-plugins/camera/ngx";

@Component({
  selector: 'app-ocr',
  templateUrl: 'ocr.page.html',
  styleUrls: ['ocr.page.scss']
})
export class OcrPage {

  // Variables to store image data, extracted text, and log messages
  extractedText: string = "";
  logMessage: string = "";

  constructor(private cam : Camera, private ocr: OCR) {}

  // Function to take a photo using the mobiles camera
  takePhoto() : void {
    // Config options for the camera
    const options: CameraOptions = {
      quality: 50,
      correctOrientation: true,
      destinationType: this.cam.DestinationType.FILE_URI,
    };

    // Uses the Camera plugin to capture a photo
    this.cam.getPicture(options).then(
      (imageData) : void => {
        // calls onSuccess function
        this.onSuccess(imageData);
      },
      // else calls onFail function
      (error) => this.onFail(error)
    );
  }

  // Function to select a photo from the mobile's photo library
  selectPhoto() : void {
    // Setting the source type for selecting a photo from the library
    const srcType : number = this.cam.PictureSourceType.PHOTOLIBRARY;
    const options = this.setOptions(srcType);

    // Using the Camera plugin to select a photo
    this.cam.getPicture(options).then(
      (imageData) : void => {
        // logs success message to user and calls onSuccess function
        this.logMessage = 'Image selected successfully.';
        this.onSuccess(imageData);
      },
      // else calls onFail function
      (error) => this.onFail(error)
    );
  }

  // Function to set options for the camera
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

  // Function when capturing or selecting a photo is successful
  onSuccess(imageData: string) : void {
    // Uses the OCR plugin to recognize text from the image and calls either success or error function
    this.ocr.recText(OCRSourceType.NORMFILEURL, imageData).then(
      (result: OCRResult) => this.onSuccessOCR(result),
      (error) => this.onFailOCR(error)
    );
  }

  // Function when OCR is successful
  onSuccessOCR(result: OCRResult) : void {
    // Extracting lines of text from OCR result
    const allBlocks : string[] = result.lines.linetext;
    let allLines: string = '';

    // Concatenating lines of text with newline
    allBlocks.forEach((element : string) : void => {
      allLines = allLines + element + '\n';
    });

    // Updating the extracted text and log message
    this.extractedText = allLines;
    this.logMessage = 'Text extracted successfully.';
    }

  // Function when capturing or selecting a photo fails
  onFail(error: any): void {
    // logs error message to user
    this.logMessage = `Error getting picture: ${error}`;    // Handle error as needed
  }

  // Function when OCR fails
  onFailOCR(error: any) : void {
    // logs error message to user
    this.logMessage = `Error recognizing text: ${error.message || 'Unknown error'}`;
  }

}
