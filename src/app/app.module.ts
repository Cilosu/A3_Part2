import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import {Device} from '@awesome-cordova-plugins/device/ngx';
import {Network} from '@awesome-cordova-plugins/network/ngx';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Camera } from "@awesome-cordova-plugins/camera/ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,
    BarcodeScanner,
    EmailComposer,
    DeviceOrientation,
    Network,
    OCR,
    Media,
    TextToSpeechAdvanced,
    Camera
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
