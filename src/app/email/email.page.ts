import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-email',
  templateUrl: 'email.page.html',
  styleUrls: ['email.page.scss']
})
export class EmailPage {

  constructor(private emailComposer: EmailComposer) {} //getting the email service

  sendEmail(){
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        // 'file://img/logo.png',
        // 'res://icon.png',
        // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        // 'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }

// Send a text message using default options
    this.emailComposer.open(email);

  }

}
