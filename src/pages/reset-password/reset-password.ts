import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Recuperação de Senha',
      subTitle: 'Dentro de alguns segundos você receberá um e-mail com uma nova senha temporária, lembre-se de altera-lá depois de efetuar o Login.',
      buttons: ['OK']
    });
    alert.present();
  }

}
