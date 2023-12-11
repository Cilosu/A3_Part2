import { Component } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-compass',
  templateUrl: 'compass.page.html',
  styleUrls: ['compass.page.scss']
})
export class CompassPage
{
  heading: number = 0;    // Compass heading (in numbers)
  direction: string = ''  // Compass Direction (String)
  subscription?: Subscription;

  constructor(private deviceOrientation: DeviceOrientation)
  {
  }

  /* ionViewDidEnter - Starts compass and prompts for calibration when opening this tab */
  ionViewDidEnter(): void
  {
    this.startCompass();
    alert("Please rotate your phone in a figure 8 to calibrate compass");
  }

  /* ionViewWillLeave - Stops compass when leaving this tab */
  ionViewWillLeave(): void
  {
    this.stopCompass();
  }

  /* stopCompass - Unsuscribe from compass changes */
  stopCompass(): void
  {
    this.subscription?.unsubscribe();
  }

  /* startCompass - Starts compass subscriptions */
  startCompass(): void
  {
    // Updates every 100 milliseconds
    const options: any = { frequency: 100 };

    // Set subscription to update when heading changes
    this.subscription = this.deviceOrientation.watchHeading(options).subscribe(
      (data: DeviceOrientationCompassHeading) =>
      {
        this.heading = Math.floor(data.magneticHeading * 10) / 10 // Updating numbered heading (rounded down to 1 decimal point)
        this.updateDirection();                                      // Update string direction
      },

      // Error call back makes an alert with error
      (error: any) =>
      {
        alert(error);
      });

  }

  /* updateDirection - Sets this.direction to the direction that the compass is facing (heading / 22.5 % 16) to return a 16 point compass */
  updateDirection(): void
  {
    // Index
    const index: number = Math.round(this.heading / 22.5) % 16;

    // Array of 16 point directions
    const directions: string[] = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S','SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']

    // Set this direction to directions[index]
    this.direction = directions[index];

    }
  }
