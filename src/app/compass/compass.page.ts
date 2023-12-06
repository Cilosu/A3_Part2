import { Component } from '@angular/core';

import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';

@Component({
  selector: 'app-compass',
  templateUrl: 'compass.page.html',
  styleUrls: ['compass.page.scss']
})
export class CompassPage {

  constructor(private deviceOrientation: DeviceOrientation) {}

//rn not functional at all!! But! the plugin IS implemented! website:
  //https://ionicframework.com/docs/v5/native/device-orientation

  getCurrentCompassHeading() {
    // Get the device current compass heading
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );
    // Watch the device compass heading change
    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => console.log(data)
    );

// Stop watching heading change
    subscription.unsubscribe();
  }

}
