import { Component } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-compass',
  template: `<ion-header [translucent]="true">
    <ion-toolbar>
      <ion-title>
        Compass
      </ion-title>
    </ion-toolbar>
  </ion-header>


  <!-- CONTENT START -->
  <ion-content [fullscreen]="true">

    <!-- HEADER START -->
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Compass</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- HEADER END -->

    <!-- COMPASS HEADING INFORMATION -->
    <ion-content>

      <p>{{ direction }}</p>
      <p>{{ heading }}</p>


    <!-- ROTATING COMPASS -->
      <div class="compass-container">
        <div class="compass">
          <div class="compass-background">
            <!-- Image taken from wikicommons: https://en.wikipedia.org/wiki/Cardinal_direction#/media/File:Brosen_windrose.svg -->
            <ion-img src="assets/compass.png" class="compass-icon" [style.transform]="'rotate(' + (360 - heading) + 'deg)'"></ion-img>
          </div>
        </div>
      </div>
    </ion-content>


</ion-content>
  `,
  styleUrls: ['compass.page.scss']
})
export class CompassPage
{


  // Compass heading (in numbers)


  heading: number = 0;
  subscription?: Subscription;
  direction: string = ''

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

    // Set subscription to update when heading changes
    this.subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) =>
      {
        this.heading = data.magneticHeading // Updating numbered heading)
        this.updateDirection();             // Update string direction
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
