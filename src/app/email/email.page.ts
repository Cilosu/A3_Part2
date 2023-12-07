import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-email',
  templateUrl: 'email.page.html',
  styleUrls: ['email.page.scss']
})
export class EmailPage {

  constructor(private emailComposer: EmailComposer) {} //getting the email service

  toRecipient: string = "";
  subjectTitle: string = "";
  carbonCopy: string = "";
  blindCarbonCopy: string = "";
  emailBody: string = "";
  errorMessage: string = "";

  sendEmail(composeEmailForm: NgForm){
    if (this.toRecipient){
      let email = {
        to: this.toRecipient,
        cc: this.carbonCopy,
        bcc: this.blindCarbonCopy,
        subject: this.subjectTitle,
        body: this.emailBody,
        isHtml: true
      }
      this.emailComposer.open(email);

    }else{
      this.errorMessage = "You must have a recipient!";
    }

  }

}


// sendEmail(){
//   let email = {
//     to: 'max@mustermann.de',
//     cc: 'erika@mustermann.de',
//     bcc: ['john@doe.com', 'jane@doe.com'],
//     attachments: [
//       // 'file://img/logo.png',
//       // 'res://icon.png',
//       // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
//       // 'file://README.pdf'
//     ],
//     subject: 'Cordova Icons',
//     body: 'How are you? Nice greetings from Leipzig',
//     isHtml: true
//   }
//
// // Send a text message using default options
//   this.emailComposer.open(email);
//
// }
