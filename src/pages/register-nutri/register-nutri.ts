import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { HomeNutriPage} from '../home-nutri/home-nutri';

@Component({
  selector: 'page-register-nutri',
  templateUrl: 'register-nutri.html',
})
export class RegisterNutriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToHomeNutri(){
    this.navCtrl.push(HomeNutriPage);
  }

}
