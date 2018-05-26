import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alter-password-email',
  templateUrl: 'alter-password-email.html',
})
export class AlterPasswordEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterPasswordEmailPage');
  }

  alertEmail() {
    let alert = this.alertCtrl.create({
      title: 'Alteração de e-mail',
      subTitle: 'E-mail alterado.',
      buttons: ['Ok']
    });
    alert.present();
  }

  alertPassword() {
    let alert = this.alertCtrl.create({
      title: 'Alteração de senha',
      subTitle: 'Senha alterada.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
