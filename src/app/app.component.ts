import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeNutriPage } from '../pages/home-nutri/home-nutri';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { RegisterPage } from '../pages/register/register';
import { RegisterNutriPage } from '../pages/register-nutri/register-nutri';
import { DiaryUserPage } from '../pages/diary-user/diary-user';
import { ChatUserPage } from '../pages/chat-user/chat-user';
import { ChatNutriPage } from '../pages/chat-nutri/chat-nutri';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { AlterPasswordEmailPage } from '../pages/alter-password-email/alter-password-email';
import { NutritionalPlanPage } from '../pages/nutritional-plan/nutritional-plan';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Seu Diário', component: DiaryUserPage },
      { title: 'Chat', component: ChatUserPage },
      { title: 'Objetivo e Plano Nutricional', component: NutritionalPlanPage },
      { title: 'Gerenciar Conta', component: MyProfilePage },
      { title: 'Logout', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
