import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {Media, MediaObject} from '@awesome-cordova-plugins/media/ngx';
import {play} from "ionicons/icons";

@Component({
  selector: 'app-record',
  template: `

    <!-- CONTENT START -->
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Record
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- HEADER START -->
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">RECORD</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- HEADER END -->

      <!-- BUTTONS START -->
      <ion-content>
        <ion-button (click)="recordButtonHandler()">{{recordButton}}</ion-button>
        <ion-button [disabled]="isRecording || !mediaExists" (click)="playRecording()">Play</ion-button>
      </ion-content>
    </ion-content>
    <!-- BUTTONS END -->

  `,
  styleUrls: ['record.page.scss']
})
export class RecordPage
{
  recordButton: string = "Start Recording"
  isRecording: boolean = false;
  mediaExists: boolean = false;

  media: MediaObject;


  constructor(private mediaService: Media)
  {
    this.media = this.mediaService.create('testRecording.mp3');
  }

  /* ionViewWillLeave - If a recording is in progress and a user leaves the tab, stops recording and stops playback */
  ionViewWillLeave(): void
  {
    // If a recording is in progress, stop and save the current recording.
    if (this.isRecording)
    {
      this.stopRecord();
    }
    this.stopPlayback();
  }

  /* recordButtonHandler - Handles the start/stop nature of the record button and its associated actions */
  recordButtonHandler(): void
  {

    // If already recording, call stopRecord
    if (this.isRecording)
    {
      this.stopRecord()
    }

    // If not already recording, call startRecord
    else
    {
      this.startRecord()
    }
  }

  /* startRecord - Records a clip via the device microphone when start Recording is pressed */
  startRecord(): void
  {
    this.isRecording = true;              // Set isRecording to true
    this.recordButton = "Stop Recording"; // Set button text to 'stop recording'
    this.stopPlayback();                  // Stop playback if audio is currently playing

    // If media already exists, release it so it a new recording can be made
    if (this.media)
    {
      this.media.release();
    }

    // Create file called 'testRecording' and start recording.
    this.media = this.mediaService.create('assets\testRecording.mp3');
    this.media.startRecord();
  }

  /* stopRecord - Stops the recording of the clip when Stop recording is pressed */
  stopRecord(): void
  {

    this.isRecording = false;             // Set isRecording to false
    this.recordButton = "Start Recording" // // Set button text to 'start recording'

    // If media already exists, stop recording and set mediaExists to true
    if (this.media)
    {
      this.mediaExists = true;
      this.media.stopRecord();
    }
    // Else print error as alert
    else
    {
      alert("No media is currently being recorded");
    }
  }

  /* PlayRecording */
  playRecording()
  {
    // If recording is already in progress, print error
    if (this.isRecording)
    {
      alert("Currently recording new audio clip")
    }
    // Else
    else
    {
      // If media does not exist print error
      if (!this.mediaExists)
      {
        alert("No media to play");
      }
      // Otherwise if media exists, play back audio
      else
      {
        this.media.play();
      }
    }
  }

  /* stopPlayback - Stops playback of the recorded audio (Used when leaving the tab) */
  stopPlayback(): void
  {
    this.media.stop();
  }
}
