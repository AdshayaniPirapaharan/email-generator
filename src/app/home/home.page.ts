import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   subject="";
   body="";
   to="";
  constructor(public navCtrl: NavController, public emailComposer: EmailComposer) {}
  
  send(){
         let email = {
           to: this.to,
           attachment: [],
           subject:this.subject,
           body:this.body,
           isHtml:false,
           //this.email.addAlias('gmail', 'com.google.android.gm');
           app:'Gmail'

           
         }
         this.emailComposer.open(email);
  }
}
