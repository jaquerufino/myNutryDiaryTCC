import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AlterPasswordEmailPage} from '../alter-password-email/alter-password-email';

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alteração de dados',
      subTitle: 'Você confirma a Alteração dos dados do seu perfil?',
      buttons: ['Sim', 'Não']
    });
    alert.present();
  }

  goToAlterPasswordEmail(){
    this.navCtrl.push(AlterPasswordEmailPage);
  }

}
