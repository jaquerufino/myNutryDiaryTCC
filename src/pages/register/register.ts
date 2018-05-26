import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
