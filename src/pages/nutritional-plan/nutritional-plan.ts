import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nutritional-plan',
  templateUrl: 'nutritional-plan.html',
})
export class NutritionalPlanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionalPlanPage');
  }

  alertObjetivo() {
    let alert = this.alertCtrl.create({
      title: 'Objetivo',
      subTitle: 'Seu nutricionista irá avaliar seu objetivo e os dados do seu perfil e em breve entrará em contato e disponibilizará seu plano nutricional.',
      buttons: ['Ok']
    });
    alert.present();
  }

}
