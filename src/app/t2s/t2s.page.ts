import { Component } from '@angular/core';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import {TTSOptions} from "@awesome-cordova-plugins/text-to-speech-advanced";

@Component({
  selector: 'app-t2s',
  templateUrl: 't2s.page.html',
  styleUrls: ['t2s.page.scss']
})
export class T2sPage {

  logMessage: string = ""; // Variable to store log messages

  readText: string = ""; // Input variable for the text to be read
  speedRate: number = 1; // Default speed rate is set to 1

  constructor(private tts: TextToSpeechAdvanced) {

  }

// Function to implement text-to-speech based on the provided input
  Listen(){
    // Define options for text-to-speech
    const options: TTSOptions = {
      text: this.readText,          // Text to be spoken
      locale: 'en-US',              // Language locale (English - United States)
      rate: this.speedRate,         // Speed rate of speech
      identifier: 'uniqueIdentifier' // Provide a unique identifier
    };
    //If input field is empty
    if (this.readText == "") {
      this.logMessage = "Text-to-speech requires text to function."; //logs error message to user
      return;
    } else {
    // Initiates the text-to-speech with the specified options
    this.tts.speak(options).then(() => {
      this.logMessage = "Text-to-speech finished."; //logs complete message to user
    }).catch((reason: any) => {
      // Log error message to user
      this.logMessage = "Error during text-to-speech: " + reason;
    });
  }}

  // Function to stop the current speech playback
  Stop(){
  // Initiates a text-to-speech operation with an empty string to stop playback
    this.tts.speak(" ").then(() => {
      // Log success message
      this.logMessage = "Text-to-speech stopped"; //logs stopped message to user
  }).catch((reason: any) => {
  // Log error message to user
  this.logMessage = "Error stopping playback: " + reason;
});
}
}
