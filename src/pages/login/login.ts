import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RegisterNutriPage } from '../register-nutri/register-nutri';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goToRegisterNutri(){
    this.navCtrl.push(RegisterNutriPage);
  }
  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
}
