import { Component } from '@angular/core';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import {TTSOptions} from "@awesome-cordova-plugins/text-to-speech-advanced";

@Component({
  selector: 'app-t2s',
  templateUrl: 't2s.page.html',
  styleUrls: ['t2s.page.scss']
})
export class T2sPage {



  textTest: string = "";
  speedRate: number = 1; // Default speed rate is set to 1

  constructor(private tts: TextToSpeechAdvanced) {

  }

  Listen(){
    const options: TTSOptions = {
      text: this.textTest,
      locale: 'en-US',
      rate: this.speedRate,
      identifier: 'uniqueIdentifier' // Provide a unique identifier
    };

    this.tts.speak(options).then(() =>
    console.log("success")).catch((reason: any) => console.log(reason));
  }

  Stop(){

    this.tts.speak(" ").then(() =>
      console.log("success")).catch((reason: any) => console.log(reason));
  }
}
