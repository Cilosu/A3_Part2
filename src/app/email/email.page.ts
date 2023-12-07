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

  //empty string variables
  toRecipient: string = "";
  subjectTitle: string = "";
  carbonCopy: string = "";
  blindCarbonCopy: string = "";
  emailBody: string = "";
  errorMessage: string = "";

  /* Function called sendEmail that is type void, with one parameter called composeEmailForm that has a NgForm type.
  * function gets the inputted values and if everything is valid from the form AND it has a recipient then it will submit.
  * The submit will open a 3rd party app (eg mail/gmail) and the previously inputted values will be filled to send the email */
  sendEmail(composeEmailForm: NgForm): void{
    //Using an if else statement for IF the form is valid then submit, ELSE a message will show
    if (composeEmailForm.valid){
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
